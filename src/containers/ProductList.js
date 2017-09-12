import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import {fetchProducts} from '../actions/productActions';
import ProductItem from '../components/ProductItem';

class ProductList extends Component {
  constructor(props) {
    super(props)
    // this.goToProduct = this.goToProduct.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render(){
    let { products } = this.props;
    //TODO refactor into functional loading component
    if(!products){
      return(
        <div>
          Loading, please wait..
        </div>
      );
    }
    else{
      const listOfProducts = products.products.map((product) => {
        return(
          <ProductItem product={product} key={product.id}/>
        );
      });

      return(
        <ul>
          {listOfProducts}
        </ul>
      )
    }
  };
}

function mapStateToProps(state) {
  const productState = state.appData.products;
  return {
      products: productState
  }
}

export default connect(mapStateToProps, {fetchProducts})(ProductList)
