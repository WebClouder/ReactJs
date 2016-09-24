import React, {Component}from 'react';
import { Router, useRouterHistory } from 'react-router'
import { createHistory, useBeforeUnload } from 'history'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import settings from '../constants/settings';
import reduces from '../reducers';
import requestMiddleware from '../middlewares/requestMiddleware';
import rootRouter from '../routers';


/*
      setting react redux  
 */
const reducer = combineReducers(reduces);
const createStoreWithMiddleware = applyMiddleware(requestMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);
module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
}); 

const history = useRouterHistory(createHistory)({ basename: settings.urlBase});

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    	<Provider store={store}>
			<Router 
				history = {history}
				routes = {rootRouter}
			/>
  		</Provider>
    );
  }
}
