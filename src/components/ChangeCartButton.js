import React from 'react';

export default (props) => {
  return(
    <button onClick={() => props.cartAction()}>
        {props.cartActionVerb}
    </button>
  );
}
