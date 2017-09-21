import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';

export default class AppShell extends Component {

  render(){
    return(
      <div className='mainContainer'>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
          {this.props.children}
      </div>
      );
  }
}
