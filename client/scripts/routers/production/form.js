import CreationPage from '../../components/production/CreationPage';
export default {
  path: 'form',
  getComponent(nextState, cb) {
    cb(null, CreationPage);
  }
}