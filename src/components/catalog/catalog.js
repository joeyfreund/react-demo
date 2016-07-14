import React from 'react';
import CatalogGrid from './grid.js';
import SearchBar from './search_bar.js';

require('isomorphic-fetch');


// A component that stores data (as its internal state).
// The data is passes to view-only component(s) as properties.
// The render() method simply sets the properties of view-only components.
export default class Catalog extends React.Component {


  constructor(props, context){
    super(props, context);
    this.store = this.context.store;
    this.shouldDisplay = this.shouldDisplay.bind(this);
  }

  componentWillMount() {
    fetch(this.props.getUrl)
      .then(res => res.json())
      .then(json => {
        this.store.dispatch({type: 'ITEMS_UPDATED', items: json.items});
      })
      .catch(err => {
        console.log('ERROR', err);
      });
  }

  componentDidMount() {
    this.store.subscribe(this.forceUpdate.bind(this));
  }


  shouldDisplay(item){
    let t = this.store.getState().filterText.toLowerCase();
    return item.brand.toLowerCase().includes(t) ||
         item.name.toLowerCase().includes(t);
  }

  render() {
    let displayedItems = this.store.getState().items.filter(this.shouldDisplay);
    let onTextChanged = (t) => {
      this.store.dispatch({type: 'FILTER_TEXT_CHANGED', filterText: t});
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

// This will make this.context available.
// The store will be provided by the Provider component.
Catalog.contextTypes = {
  store: React.PropTypes.object.isRequired
};
