import MainApp from '../apps/MainApp';
import productionRouter from '../routers/production';

export default {
    childRoutes: [{
            path: '/',
            component: MainApp,
            childRoutes: [
                productionRouter
            ]
    }]
};