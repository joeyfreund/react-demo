import React from 'react';
import CatalogGrid from './grid.js';
import SearchBar from './search_bar.js';

require('isomorphic-fetch');

// A component that stores data (as its internal state).
// The data is passes to view-only component(s) as properties.
// The render() method simply sets the properties of view-only components.
export default class Catalog extends React.Component {


  constructor(){
    super();
    this.state = { items: [], filterText: ''};
    this.shouldDisplay = this.shouldDisplay.bind(this);
  }


  shouldDisplay(item){
    let t = this.state.filterText.toLowerCase();
    return item.brand.toLowerCase().includes(t) || 
         item.product.toLowerCase().includes(t);   
  }


  componentWillMount() {
    fetch(this.props.getUrl)
      .then(res => res.json())
      .then(json => {
        this.setState( { items : json.items });
      })
      .catch(err => { 
        // TODO: Change the state of this component, to indicate an error
        console.log('ERROR', err); 
      });
  }



  render() {

    let displayedItems = this.state.items.filter(this.shouldDisplay);
    let onTextChanged = (t) => { this.setState({filterText: t}); };

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