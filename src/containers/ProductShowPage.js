import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { isEmpty } from 'lodash';

import ProductItem from '../components/ProductItem';
import ChangeCartButton from '../components/ChangeCartButton';
import { fetchProduct } from '../actions/productActions';
import { addToCart, removeFromCart } from '../actions/CartActions';

class ProductShowPage extends Component {
  constructor(props){
    super(props);
    this.cartAction = this.cartAction.bind(this);
  }

  componentWillMount(){
    if(isEmpty(this.props.singleProduct)){
      this.props.fetchProduct(this.props.location.pathname.slice(-1));
    }
  }

  //NOTE Bad idea?
  cartAction(){
    const id = this.props.singleProduct.id;
    if(this.props.cart.includes(id)){
      this.props.removeFromCart(id)
    } else{
      this.props.addToCart(id)
    }
  }

  render(){
    return(
      <div>
        <ProductItem product={this.props.singleProduct} />
        {/* //gross, ternary */}
        {
          this.props.cart.includes(this.props.singleProduct.id)
          ? (<ChangeCartButton
              id={this.props.singleProduct.id}
              cartAction={this.cartAction}
              cartActionVerb="Remove from Cart"
            />)
          : (<ChangeCartButton
              id={this.props.singleProduct.id}
              cartAction={this.cartAction}
              cartActionVerb="Add to Cart"
            />)
          }
        <button onClick={() => this.props.history.goBack()}>
          {/* {uses ConnectedRouter history object to go back} */}
            Go Back
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      singleProduct: state.product.product,
      cart: state.cart
    }
}

export default withRouter(connect(mapStateToProps, { fetchProduct, addToCart, removeFromCart })(ProductShowPage));
