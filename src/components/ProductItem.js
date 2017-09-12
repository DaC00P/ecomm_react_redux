import React from 'react';

export default (props) => {
  const { product } = props;
  return (
    <li key={product.id}>
      <h2>{product.name}</h2>
      <ul>
        <li>{product.description}</li>
        <li>{product.numberRemaining}</li>
        <li>{product.categories}</li>
        <li>{product.price}</li>
      </ul>
    </li>
  )
}
