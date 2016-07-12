import React from 'react';
import { Link } from 'react-router'


export default class CatalogItem extends React.Component {

  render() {

  	let style    = {textAlign: 'center', margin: 16};
  	let imgStyle = { maxHeight: 320 };

  	return (
      <Link to={this.props.productPage}>
        <div style={style}>
        	<h1>{this.props.brand}</h1>
        	<img src={this.props.image} style={ imgStyle }/>
        	<h2>{this.props.name}</h2>
        </div>
      </Link>
    );
  }
}


CatalogItem.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  productPage: React.PropTypes.string.isRequired
};

CatalogItem.defaultProps = {
 image: 'http://placehold.it/200x320?text=Missing+image'
};
