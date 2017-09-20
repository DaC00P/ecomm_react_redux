import React from 'react';
import ProductList from './ProductList';

const landingPage = (props) => {
  return(
    <div>
      <main>
        <h1> this is your app </h1>
        <button onClick={()=>{props.history.push('/testPage')}}>to the moon</button>
        <ProductList></ProductList>
      </main>
    </div>
  );
};

export default landingPage;
