import React from 'react';
import { Route, Switch} from 'react-router-dom';

import LandingPage from './containers/landingPage';
// import testPage from './components/testPage';
import ProductShowPage from './containers/ProductShowPage';
import ProductList from './containers/ProductList';

export default (props) =>  {
    return (
      //all other routes go above root rout
        <Switch>
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/products/:id" component={ProductShowPage} />
          <Route path="/" component={LandingPage}/>
        </Switch>
    );
};
