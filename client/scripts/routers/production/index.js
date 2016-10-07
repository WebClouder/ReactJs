// import ProductionApp from '../../apps/ProductionApp';
import formRouter from './form';
import viewRouter from './view';
export default {
  path: 'productions',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
            cb(null, require('../../apps/ProductionApp').default)
        })
  },
  childRoutes: [
      formRouter,
      viewRouter
  ]
}