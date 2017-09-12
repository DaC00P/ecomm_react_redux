import React, { Component } from 'react';
import { Router , Route, Switch} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
// import { connect } from 'react-redux';

import './App.css';
import LandingPage from './landingPage'
import testPage from './testPage'

const history = createHashHistory();

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          {/* {all other routes go above root rout} */}
          <Route path="/testPage" component={testPage}/>
          <Route exact path="/" component={LandingPage}/>
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default App;

// function mapStateToProps(state) {
//   return {
//       isAuthenticated: state.auth,
//       state: state
//   }
// }
//
// export default connect(mapStateToProps)(App);
