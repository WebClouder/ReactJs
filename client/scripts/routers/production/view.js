export default {
  path: 'search',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../components/production/View').default)
    })
  }
}