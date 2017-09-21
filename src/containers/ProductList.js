import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {GridList, GridTile} from 'material-ui/GridList';

//actions
import { fetchProducts, fetchProduct } from '../actions/productActions';

//sub-components
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
    let { products } = this.props;
    if(!products){
      return <LoadingScreen />;
    }
    else{
      return(
        <GridList>
          {products.map((product) => {
            return(
              <GridTile key={product.name}
                onClick={() => this.goToProduct(product.id)}
                >
                  <ProductItem product={product}
                    key={product.id}
                  />
              </GridTile>
              )
            })}
          </GridList>
      );
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
