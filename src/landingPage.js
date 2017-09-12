import React from 'react';

const landingPage = (props) => {

  return(
    <div>
      <main>
        <h1> this is your app </h1>
        <button onClick={()=>{props.history.push('/testPage')}}>to the moon</button>
      </main>
    </div>
  );
};

export default landingPage;
