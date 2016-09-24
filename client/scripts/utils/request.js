import settings from '../constants/settings';

const   Request = require('superagent'),
        remoteUrl = null,
        doRequest = function doRequest(url, action, data) {
            if(url) {
                let root = settings.urlRoot,
                    randomNum = Math.round(Math.random(100000000) * 100000000);
                url = root + url;
                if(url.indexOf('?') < 0){
                    url += '?r=' + randomNum;
                }else{
                    url += '&r=' + randomNum;
                }
                $('#loading').modal('show');
                let req = Request[action](url);
                switch (action) {
                    case 'post':
                    case 'put':
                    case 'del':
                        req.set('Content-Type', 'application/json').send(data);
                        break;
                }
                return req;
            }
            return void(0);
        };
export default function createRequest(requestUrl) {
    const url = requestUrl;
    return {
        post: function post(data) {
            return doRequest(url, 'post', data);
        },
        put: function put({searchString, pageNum, pageSize, data}) {
            let updateUrl = url + '?' + 'pageNum=' + pageNum + '&pageSize=' + pageSize + '&q=' + encodeURI(searchString);
            return doRequest(updateUrl, 'put', data);
        },
        remove: function remove({searchString, pageNum, pageSize, data}) {
            let removeUrl = url + '?' + 'pageNum=' + pageNum + '&pageSize=' + pageSize + '&q=' + encodeURI(searchString);
            return doRequest(removeUrl, 'del', data);
        },
        get: function get(id) {
            return doRequest(url + '/' + id, 'get');
        },
        all: function all(callback) {
            return doRequest(url, 'get');
        },
        search: function search(searchString="") {
            let searchUrl = url + '/search?' + '&q=' + encodeURI(searchString);
            return doRequest(searchUrl, 'get');
        },
        getPage: function getPage(pageNum, pageSize, searchString="") {
            let pageUrl = url + '?' + 'pageNum=' + pageNum + '&pageSize=' + pageSize + '&q=' + encodeURI(searchString);
            return doRequest(pageUrl, 'get');
        }
    }
}