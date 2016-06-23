import React from 'react';
import CatalogItem from './catalog_item.js';



export default class CatalogItems extends React.Component {

  componentWillMount() {
    console.log('Need to make an API call to get data for catalog items ...');

    require('isomorphic-fetch');

    fetch('/api/v1/products')
      .then(res => res.json())
      .then(json => { console.log('Loaded data:', json); })
      .then(() => { console.log('Re-rendering ...'); this.render(); })
      .catch(err => { console.log('ERROR', err); });
  }


  render() {
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
