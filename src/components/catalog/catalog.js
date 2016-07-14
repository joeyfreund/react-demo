import { connect } from 'react-redux'

import React from 'react';
import CatalogGrid from './grid.js';
import SearchBar from './search_bar.js';

require('isomorphic-fetch');



// Presentational component, that triggers an AJAX request before it is mounted
class CatalogView extends React.Component {

  componentWillMount() {
    fetch(this.props.getUrl)
      .then(res => res.json())
      .then(json => this.props.onItemsUpdated(json.items))
      .catch(err => {
        console.log('ERROR', err);
      });
  }

  render(){
      return (
        <div>
          <SearchBar textChanged={this.props.onTextChanged} />
          <p>Showing {this.props.displayedItems.length} item(s)</p>
          <CatalogGrid items={this.props.displayedItems} />
        </div>
      );
  }
}



// Connect the CatalogView to the Redux store ...

const mapStateToProps = (state, ownProps) => {

  function shouldDisplay(item){
    let t = state.filterText.toLowerCase();
    return item.brand.toLowerCase().includes(t) ||
           item.name.toLowerCase().includes(t);
  }

  return {
    displayedItems: state.items.filter(shouldDisplay),
    getUrl: ownProps.getUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChanged: (t) => {
      dispatch({type: 'FILTER_TEXT_CHANGED', filterText: t});
    },
    onItemsUpdated: (items) => {
      dispatch({type: 'ITEMS_UPDATED', 'items': items});
    }
  };
};

const Catalog = connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogView);

Catalog.propTypes = {
  getUrl: React.PropTypes.string
};

Catalog.defaultProps = {
  getUrl: '/api/v1/products'
};

// Export the connected component
export default Catalog;
