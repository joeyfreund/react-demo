import React from 'react';


export default class CatalogItem extends React.Component {

  render() { 

  	let style    = {textAlign: 'center', margin: 16};
  	let imgStyle = { maxHeight: 320 };

  	return (
      <div style={style}>
      	<h1>{this.props.brand}</h1>
      	<img src={this.props.image} style={ imgStyle }/>
      	<h2>{this.props.product}</h2>
      </div>
    );
  }
}


CatalogItem.propTypes = {
  brand: React.PropTypes.string.isRequired,
  product: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired
};

CatalogItem.defaultProps = {
 image: 'http://placehold.it/200x320?text=Missing+image'
};

