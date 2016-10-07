// import MainApp from '../apps/MainApp';
import productionRouter from '../routers/production';

export default {
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../apps/MainApp').default)
        })
    },
    childRoutes: [{
            path: '/',
            childRoutes: [
                productionRouter
            ]
    }]
};