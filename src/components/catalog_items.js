import React from 'react';
import CatalogItem from './catalog_item.js';


export default class CatalogItems extends React.Component {

  render() {

  	let css = require('./catalog_items.css');
  	console.log(css);
  	console.log(css.container);


    return (
      <div>
      	{this.props.items.map(
      		(item, i) => { 
      			return (
      				<div key={i} style={{ float: 'left' }}>
      					<CatalogItem  {...item} />
      				</div>
      			);
      		}
      	)}
      </div>
    );
  }
}
