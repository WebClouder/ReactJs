import View from '../../components/production/View';
export default {
  path: 'search',
  getComponent(nextState, cb) {
    cb(null, View);
  }
}