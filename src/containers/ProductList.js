import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchProducts, fetchProduct } from '../actions/productActions';
import ProductItem from '../components/ProductItem';
import LoadingScreen from '../components/LoadingScreen'


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.goToProduct = this.goToProduct.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  goToProduct(id) {
    //TODO is this a race condition? It is if fetchProduct is making an API call I guess?
    this.props.fetchProduct(id);
    this.props.history.push(`/products/${id}`);
  }

  render(){
    //TODO refactor into functional loading component
    // console.log(this.props, 'PROPS IN PRODLIST')
    let { products } = this.props;
    if(!products){
      return <LoadingScreen />;
    }
    else{
      const listOfProducts = products.map((product) => {
        return(
          <div key={product.name}
               onClick={() => this.goToProduct(product.id)}
               >
            <ProductItem product={product}
              key={product.id}
            />
          </div>
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
  const productsState = state.product.products;
  const singleProductState = state.product.product;
  return {
      products: productsState,
      singleProduct: singleProductState
  }
}

export default withRouter(connect(mapStateToProps, {fetchProducts, fetchProduct })(ProductList));
