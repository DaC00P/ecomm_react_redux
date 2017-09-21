import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { isEmpty } from 'lodash';

import ProductItem from '../components/ProductItem';
import { fetchProduct } from '../actions/productActions';

class ProductShowPage extends Component {
  componentWillMount(){
    if(isEmpty(this.props.singleProduct)){
      this.props.fetchProduct(this.props.location.pathname.slice(-1));
    }
  }

  render(){
    return(
      <div>
          <ProductItem product={this.props.singleProduct} />
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
      singleProduct: state.product.product
    }
}

export default withRouter(connect(mapStateToProps, { fetchProduct })(ProductShowPage));
