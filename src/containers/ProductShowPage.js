import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { isEmpty } from 'lodash';

// import ProductItem from '../components/ProductItem';
import { fetchProduct } from '../actions/productActions';

class ProductShowPage extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  componentWillMount(){
    if(isEmpty(this.props.singleProduct)){
      this.props.fetchProduct(this.props.location.pathname.slice(-1));
    }
  }

  goBack() {
    console.log(this.props)
    this.props.history.goBack();
  }

  render(){
    return(
      <div>
        <h1>
          sup
          {this.props.singleProduct.id}
        </h1>
        <button onClick={this.goBack}>
            Go Back
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  let singleProductState;
  if(!state.product.product){
    return {
        singleProduct: {}
    }
  }
  else if(state.product.product.length > 0){
    singleProductState = state.product.product[0];
  } else{
    singleProductState = state.product.product;
  }
  return {
      singleProduct: singleProductState
  }
}

export default withRouter(connect(mapStateToProps, { fetchProduct })(ProductShowPage));
