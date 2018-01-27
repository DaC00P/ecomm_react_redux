import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MuiAppBar from 'material-ui/AppBar';
import { Button } from 'material-ui';

import AppSideBar from './AppSideBar';

class AppShell extends Component {
  state = {open: false};

  handleToggle = () => {
    this.setState({open: !this.state.open});
  }

  render(){
    return(
      <div className='mainContainer'>
        <MuiAppBar
          title="Give us your Monies"
          children={<Button 
                      label="Toggle Cart"
                      onClick={this.handleToggle} 
                      children="Toggle Cart"
                    />}
        />
        <AppSideBar
          open={this.state.open}
          handleToggle={this.handleToggle}
        />
        {this.props.children}
      </div>
      );
  }
}

function mapStateToProps(state) {
  const productsState = state.product.products;
  return {
      products: productsState
  }
}

export default withRouter(connect(mapStateToProps)(AppShell));
