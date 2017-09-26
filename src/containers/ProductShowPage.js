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
    this.state = {action: ''}
    this.cartAction = this.cartAction.bind(this);
    this.cartActionCheck = this.cartActionCheck.bind(this);
  }

  componentWillMount(){
    if(isEmpty(this.props.singleProduct)){
      this.props.fetchProduct(this.props.location.pathname.slice(-1));
    }
  }

  componentDidMount(){
    this.cartActionCheck();
  }

  cartActionCheck(){
    if(this.props.cart.includes(this.props.singleProduct.id)){
      this.setState({action: 'Remove from Cart'});
    } else{
      this.setState({action: 'Add to Cart'});
    }
  }

  cartAction(){
    if(this.props.cart.includes(this.props.singleProduct.id)){
      return this.props.removeFromCart.bind(this)
    } else{
      return this.props.addToCart.bind(this)
    }
  }

  render(){
    return(
      <div>
        <ProductItem product={this.props.singleProduct} />
        <ChangeCartButton
          id={this.props.singleProduct.id}
          cartAction={this.cartAction}
          cartActionVerb={this.state.action}
        />
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
      cart: state.cart.cart
    }
}

export default withRouter(connect(mapStateToProps, { fetchProduct, addToCart, removeFromCart })(ProductShowPage));
