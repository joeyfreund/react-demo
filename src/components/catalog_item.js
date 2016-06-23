import React from 'react';


export default class CatalogItem extends React.Component {

  render() {
    return (
      <div style={{textAlign: 'center', margin: 16}}>
      	<h1>{this.props.brand}</h1>
      	<img src={this.props.image} style={{ maxHeight: 320 }}/>
      	<h2>{this.props.product}</h2>
      </div>
    );
  }
}

