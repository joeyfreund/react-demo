import React from 'react';

export default class ProductPage extends React.Component {

  constructor(){
    super();
    this.addToCart = this.addToCart.bind(this);
  }


  addToCart(){
    this.props.addToCart(this.props.id);
  }


  render() {
    return (
      <div>
        <img src={ this.props.image } style={{float: 'left'}}/>
        
        <h1>{ this.props.brand } </h1>
        <h2>{ this.props.product }</h2>
        <p>Price: { this.props.price }$</p>
        <input type="button" value="Add to shopping cart" onClick={this.addToCart } />
      </div>
    );
  }
}


ProductPage.propTypes = {
  id: React.PropTypes.any.isRequired
  price: React.PropTypes.number.isRequired
  brand: React.PropTypes.string.isRequired
  product: React.PropTypes.string.isRequired
  image: React.PropTypes.string.isRequired
  addToCart: React.PropTypes.func.isRequired
};
