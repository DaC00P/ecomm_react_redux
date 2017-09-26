import React from 'react';

export default (props) => {
  console.log('change button props', props)
  return(
    <button onClick={() => props.cartAction()(props.id)}>
        {props.cartActionVerb}
    </button>
  );
}
