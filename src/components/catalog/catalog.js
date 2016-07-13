import React from 'react';
import CatalogGrid from './grid.js';
import SearchBar from './search_bar.js';

require('isomorphic-fetch');

var reduxStore = require('../../store.js');


// A component that stores data (as its internal state).
// The data is passes to view-only component(s) as properties.
// The render() method simply sets the properties of view-only components.
export default class Catalog extends React.Component {


  constructor(){
    super();
    reduxStore.subscribe(() => {
      // FIXME: We need to use render(), not forceUpdate().
      //        See comment in src/client.js
      this.forceUpdate();
    });

    this.shouldDisplay = this.shouldDisplay.bind(this);
  }


  shouldDisplay(item){
    let t = reduxStore.getState().filterText.toLowerCase();
    return item.brand.toLowerCase().includes(t) ||
         item.name.toLowerCase().includes(t);
  }


  componentWillMount() {
    fetch(this.props.getUrl)
      .then(res => res.json())
      .then(json => {
        reduxStore.dispatch({type: 'ITEMS_UPDATED', items: json.items});
      })
      .catch(err => {
        // TODO: Change the state of this component, to indicate an error
        console.log('ERROR', err);
      });
  }



  render() {
    let displayedItems = reduxStore.getState().items.filter(this.shouldDisplay);
    let onTextChanged = (t) => {
      reduxStore.dispatch({type: 'FILTER_TEXT_CHANGED', filterText: t});
    };

    return (
      <div>
        <SearchBar textChanged={onTextChanged} />
        <p>Showing {displayedItems.length} item(s)</p>
        <CatalogGrid items={displayedItems} />
      </div>
    );
  }
}



Catalog.propTypes = {
  getUrl: React.PropTypes.string.isRequired
};

Catalog.defaultProps = {
  getUrl: '/api/v1/products'
};
