import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default (props) => {
  return(
    <div className='sidebar'>
      <Drawer open={props.open} openSecondary={true}>
        <RaisedButton
          label="Toggle Cart"
          onClick={props.handleToggle}
        />
        {/* //TODO, map over the cart state and render productItems inside of MenuItems */}
        <MenuItem>Product</MenuItem>
        <MenuItem>Product 2</MenuItem>
      </Drawer>
    </div>
  );
}
