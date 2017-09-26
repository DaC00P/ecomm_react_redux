import React from 'react';
import ProductList from './ProductList';

const landingPage = (props) => {
  //TODO will eventually conditionally render based on auth status. 
  //If this doesn't need to happen then this component is obsolete.
  return(
      <main>
        <ProductList />
      </main>
  );
};

export default landingPage;
