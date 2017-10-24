import React from 'react';

export default (props) => {
  if(props.text.length > 0){
    return(
      <div>{props.text}</div>
    );
  }
  return(
    <div>
      Loading, please wait..
    </div>
  );
}
