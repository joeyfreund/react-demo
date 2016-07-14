import { connect } from 'react-redux'
import React from 'react';
require('isomorphic-fetch');



// Presentational component (stateless, functional component)
const ProductPageView = (props) => {
  return (
    <div>
      <img src={ props.image } style={{float: 'left'}}/>
      <h1>{ props.brand } </h1>
      <h2>{ props.name }</h2>
      <p>Price: { props.price }$</p>
      <input type="button" value="Add to shopping cart" onClick={props.addToCart } />
    </div>
  );
}



// Connect the CatalogView to the Redux store ...

const mapStateToProps = (state, ownProps) => {
  var item = state.items.find(item => item.sku == ownProps.routeParams.sku);

  return {
    price: 999.99,
    brand: item.brand,
    name: item.name,
    image: item.image
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: () => {
      alert('Need to add item to shopping cart');
    }
  };
};

const ProductPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPageView);

// Export the connected component
export default ProductPage;
