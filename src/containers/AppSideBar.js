import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';

import ShoppingCart from '../components/ShoppingCart';

export default (props) => {
  return(
    <div className='sidebar'>
      <Drawer open={props.open} openSecondary={true}>
        <RaisedButton
          label="Toggle Cart"
          onClick={props.handleToggle}
          style={{'display': 'block'}}
          // should probably use real css?
        />
        <ShoppingCart />
      </Drawer>
    </div>
  )
};
