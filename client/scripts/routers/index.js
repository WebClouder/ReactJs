// import productionRouter from '../routers/production';

export default {
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../apps/MainApp').default)
        }, 'main_app')
    },
    childRoutes: [{
            path: '/',
            childRoutes: [
                require('../routers/production').default
            ]
    }]
};