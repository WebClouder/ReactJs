/* eslint-disable no-var, strict */
var express = require('express'),
	  app = express(),
	  bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    compression = require('compression'),
    methodOverride = require('method-override'),
	  webpack = require('webpack'),
	  WebpackDevServer = require('webpack-dev-server'),
	  webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
	  config = require('./webpack.config'),
	  webpackcompiler = webpack(config),
	  path = require('path');

function useWebpackMiddleware(app) {
    app.use(webpackDevMiddleware(webpackcompiler, {
        publicPath: config.output.publicPath,
        stats: {
            colors: true,
            chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
            'errors-only': true
        }
    }));
    app.use(webpackHotMiddleware(webpackcompiler, {
        log: console.log
    }));

    return app;
}

if (process.env.NODE_ENV !== 'production') {
    console.log('DEVOLOPMENT ENVIRONMENT: Turning on WebPack Middleware...');
    useWebpackMiddleware(app);
} else {
    console.log('PRODUCTION ENVIRONMENT');
	//Production needs physical files! (built via separate process)
	//app.use(express.static(path.join(__dirname, 'dist')));
}
app.use(methodOverride());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(compression({filter: shouldCompress}));
app.use(express.static(path.join(__dirname, 'public')));

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}

/** app routers */
var controllers = {
  // Load the application entry point.
  base: {
    login:  function(req, res){
      res.cookie('role','admin');
      res.send({isSuccess:true});
    }
  },
  productions: {
    queryPage: function(req, res) {
      var pageNum = +req.query.pageNum,
          pageSize = +req.query.pageSize,
          result = productions.slice(
            pageSize * (pageNum - 1),
            (pageSize * pageNum)
          );
      res.send({
        isSuccess: true,
        data: {
          data: result,
          pageSize: pageSize,
          totalSize: 50
        }
	    });
    },
    search: function(req, res) {
      var pageSize = +req.query.pageSize;
      res.send(
        {
          data: {
            totalSize: 2,
            pageSize: pageSize,
            data:productions
          },
          errorMessage: '',
          isSuccess: true
        }
      );
    },
    get: function(req, res) {
      var id = req.params.id;
      var production = productions.filter(function(production){
        return production.id === id;
      });
      res.send(production);
    },
    create: function(req, res) {
      var production = req.body;
      productions.push(production);
      production.id = productions.length;
      res.send({
        isSuccess:false,
        // successMessage:'已成功创建车辆信息!'
        validationMessages: {
          'name': '已存在同名产品'
        }
      });
    },
    update: function(req, res) {
      var updatedProduction = req.body;
      productions = productions.map(function(production){
        if(production.id === updatedProduction.id){
          return updatedProduction;
        }
        return production;
      });
      res.send({
        isSuccess:true,
        data:{
          totalSize: 50,
          data:productions
        },
        errorMessage:'',
        validationMessages: {}
      });
    },
    remove: function(req, res) {
      var removedProduction = req.body;
      productions = productions.map(function(production){
        if(production.id !== removedProduction.id){
          return production
        }
      });
      res.send({
        isSuccess:true, 
        data:{
          totalSize: 50,
          data: []
        }
      });
    }
  }
};

var productions = [];

/** app routers start */
app.post('/login',  controllers.base.login);
app.post('/api/productions',  controllers.productions.create);
app.delete('/api/productions',  controllers.productions.remove);
app.put('/api/productions',  controllers.productions.update);
app.get('/api/productions',  controllers.productions.queryPage);
app.get('/api/productions/search',  controllers.productions.search);
/** app routers end */

app.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/public', 'index.html'));
});
var port = process.env.PORT || 5000;
var host = process.env.HOST || '0.0.0.0';
var server = app.listen(port, host, function () {
  console.log('Example app listening at http://%s:%s', host, port)
});
// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true
// }).listen(5000, 'localhost', function (err) {
//     if (err) {
//       console.log(err);
//     }
//     console.log('Listening at localhost:5000');
// });

