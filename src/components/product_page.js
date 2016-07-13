import React from 'react';
require('isomorphic-fetch');


// Container, in charge of making API call, and passing the
// returned data to the view compoent (as properties)
export default class ProductPage extends React.Component {

  constructor(){
    super();
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      brand: '--',
      product: '--',
      price: 0.0,
      image: 'http://placehold.it/240x480?text=Missing+image'
    };
  }

  productId(){
    return this.props ? this.props.params.sku : null;
  }

  componentWillMount() {
    fetch('/api/v1/product/' + this.productId())
      .then(res  => res.json())
      .then(json => {
        this.setState(json);
      })
      .catch(err => {
        console.log('ERROR', err);
      });
  }

  addToCart() {
    alert("Need to add product " + this.productId() + " to shopping cart.");
  }

  render(){
    return (
      <ProductPageView {...this.state } addToCart= {this.addToCart} />
    );
  }

}


ProductPage.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.any.isRequired
  }).isRequired
};




// View-only component
class ProductPageView extends React.Component {

  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <img src={ this.props.image } style={{float: 'left'}}/>
        <h1>{ this.props.brand } </h1>
        <h2>{ this.props.product }</h2>
        <p>Price: { this.props.price }$</p>
        <input type="button" value="Add to shopping cart" onClick={this.props.addToCart } />
      </div>
    );
  }
}



ProductPageView.propTypes = {
  price: React.PropTypes.number.isRequired,
  brand: React.PropTypes.string.isRequired,
  product: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  addToCart: React.PropTypes.func.isRequired
};
