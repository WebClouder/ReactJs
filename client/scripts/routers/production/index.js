import ProductionApp from '../../apps/ProductionApp';
import formRouter from './form';
import viewRouter from './view';
export default {
  path: 'productions',
  getComponent(nextState, cb) {
    cb(null, ProductionApp);
  },
  childRoutes: [
      formRouter,
      viewRouter
  ]
}