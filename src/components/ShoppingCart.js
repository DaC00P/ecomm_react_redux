import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findKey } from 'lodash';

// import {MenuItem} from 'material-ui/Menu';
import ProductItem from './ProductItem';
import LoadingScreen from './LoadingScreen';

import { fetchProduct } from '../actions/productActions';

class ShoppingCart extends Component {
  componentWillMount(){
    this.productCheck();
  }

  productCheck = () => {
    this.props.cart.forEach((cartItemId) => {
      if(!this.props.products.includes(cartItemId)){
        this.props.fetchProduct(cartItemId)
      }
    });
  }

  //this is really inefficient. Build this better.
  // Shouldn't have to re-map completely every time we re render if we know what action was just taken?
  renderCart = () => {
    if(this.props.cart.length === 0){
      return (
        <LoadingScreen text="Please Add Products!" />
      );
    };

    return this.props.cart.map((cartItemId) => {
      if(!this.props.productIds.includes(cartItemId)){
        return(
          <LoadingScreen key={cartItemId}/>
        )
      }
      else {
        const product = findKey(this.props.products, function(product){
          if(product.id === cartItemId){
            return product
          };
        });
        return(
          <ProductItem product={product} key={product.id}/>
        )
      }
    });
  }

  render(){
    return(
      <ul>
        {this.renderCart()}
      </ul>
    );
  }
};

function mapStateToProps(state) {
    return {
      products: state.product.products,
      productIds: state.product.products.map((product)=> {return product.id}),
      cart: state.cart
    }
}


export default connect(mapStateToProps, { fetchProduct })(ShoppingCart);
