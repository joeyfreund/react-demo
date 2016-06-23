import React from 'react';
import CatalogGrid from './catalog/grid.js';
import SearchBar from './catalog/search_bar.js';


// A component that stores data (as its internal state).
// The data is passes to view-only component(s) as properties.
// The render() method simply sets the properties of view-only components.
export default class CatalogItems extends React.Component {



  constructor(){
    super();
    this.state = { items: [], filterText: ''};
  }


  componentWillMount() {
    require('isomorphic-fetch');
    fetch(this.props.getUrl)
      .then(res => res.json())
      .then(json => {
        // setState() causes a re-rendering of the component
        this.setState( { items : json.items });
      })
      .catch(err => { 
        // TODO: Change the state of this component, to indicate an error
        console.log('ERROR', err); 
      });
  }



  render() {

    // Prepare data for the view(s) ...
    let displayedItems = this.state.items.filter((item) => {
      let text = this.state.filterText.toLowerCase();
      return item.brand.toLowerCase().includes(text) || 
           item.product.toLowerCase().includes(text);   
    });
    let onTextChanged = (t) => { this.setState({filterText: t}); };

    // Now we ready to render
    return (
      <div>
        <SearchBar textChanged={onTextChanged} />
        <p>Showing {displayedItems.length} item(s)</p>
        <CatalogGrid items={displayedItems} />
      </div>
    );
  }
}


