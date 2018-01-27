import React, {Component} from 'react';

import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';

import ShoppingCart from '../components/ShoppingCart';

export default class AppSideBar extends Component {
  render(){
    return(
      <div className='sidebar'>
          <Drawer open={this.props.open} onClose={this.props.handleToggle}>
            <Button
              label="Toggle Cart"
              onClick={this.props.handleToggle}
              style={{'display': 'block'}}
              children="Toggle Cart"
            />
            <ShoppingCart />
        </Drawer>
      </div>
    )
  }
};
