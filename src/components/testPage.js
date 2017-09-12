import React from 'react';


export default (props) => {
  return(
    <div>
      <h1>TEST</h1>
      <button onClick={()=>{props.history.push('/')}}>back to earth</button>
    </div>
  )
}
