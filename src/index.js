import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import jwt from 'jsonwebtoken';

import App from './App';
import './index.css';

import rootReducer from './reducers/rootReducer'
import registerServiceWorker from './registerServiceWorker';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    rootReducer,
    router: routerReducer
  }),
  compose(applyMiddleware(middleware, thunk))
)

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
     document.getElementById('root'));
});

registerServiceWorker();
