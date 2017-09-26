import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MuiAppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import AppSideBar from './AppSideBar';

class AppShell extends Component {
  constructor(props) {
      super(props);
      this.state = {open: false};
      this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(){
    this.setState({open: !this.state.open});
  }

  render(){
    return(
      <div className='mainContainer'>
        <MuiAppBar
          title="Give us your Monies"
          showMenuIconButton={false}
          iconElementRight={<FlatButton label="Toggle Cart" onClick={this.handleToggle} />}
        />
        <AppSideBar
          handleToggle={this.handleToggle}
          open={this.state.open}
        />
        {this.props.children}
      </div>
      );
  }
}

function mapStateToProps(state) {
  const productsState = state.product.products;
  //TODO add cart to reducers so we can get the state here.
  // const cartState = state.cart.products
  return {
      products: productsState
  }
}

export default withRouter(connect(mapStateToProps)(AppShell));
