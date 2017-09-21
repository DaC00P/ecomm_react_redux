import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';

//injectTapEventPlugin required for material-ui to work for now
import injectTapEventPlugin from 'react-tap-event-plugin';
//gotta wrap app in MuiThemeProvider for mui to hook in
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//required for the connectedRouter to work properly
import createHistory from 'history/createBrowserHistory'

//when auth is put in, use JWT to decode/encode JSON Web Tokens
// import jwt from 'jsonwebtoken';

//routes, done with react-router-redux. All components are hooked into routes, no props.children used.
import AppRouter from './AppRouter';
//Single page app shell that comprises the AppBar, SideBar(for cart pop-out), and Footer
import AppShell from './containers/AppShell';
import rootReducer from './reducers/rootReducer';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  rootReducer,
  compose(applyMiddleware(middleware, thunk))
)

injectTapEventPlugin();

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider>
        <AppShell>
          <AppRouter />
        </AppShell>
      </MuiThemeProvider>
    </Provider>,
     document.getElementById('root'));
});

registerServiceWorker();
