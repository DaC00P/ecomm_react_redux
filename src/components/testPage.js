import React from 'react';
import FlatButton from 'material-ui/FlatButton';


export default (props) => {
  return(
    <div>
      <h1>TEST</h1>
      <FlatButton label="Back" primary={true} onClick={()=>{props.history.push('/')}} />
    </div>
  )
}
