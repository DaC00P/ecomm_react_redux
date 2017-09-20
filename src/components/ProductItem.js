import React from 'react';

export default (props) => {
  // console.log(props)
  const { product } = props;
  return (
        <ul>
          <h3>{product.name}</h3>
          <li><strong>{product.description}</strong></li>
          <li>{product.numberRemaining}</li>
          <li>{product.categories}</li>
          <li>{product.price}</li>
        </ul>
  );
}
