import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import { ConnectedRouter } from 'react-router-redux'
// import { connect } from 'react-redux';

import './AppRouter.css';
import LandingPage from './containers/landingPage'
import testPage from './components/testPage'

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
