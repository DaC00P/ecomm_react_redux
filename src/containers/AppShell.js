import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class AppShell extends Component {
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
        <AppBar
          title="Give us your Monies"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}
          iconElementRight={<FlatButton label="Toggle Cart" onClick={this.handleToggle} />}
        />
        <div className='sidebar'>
          <Drawer open={this.state.open} openSecondary={true}>
            <RaisedButton
              label="Toggle Cart"
              onClick={this.handleToggle}
            />
            {/* //TODO, map over the cart state and render productItems inside of MenuItems */}
            <MenuItem>Product</MenuItem>
            <MenuItem>Product 2</MenuItem>
          </Drawer>
        </div>
          {this.props.children}
      </div>
      );
  }
}
