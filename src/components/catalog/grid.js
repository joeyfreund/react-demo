import React from 'react';
import CatalogItem from './item.js';

// A stateless, view-only component.
// This component takes properties, and uses them to render the view.
export default class CatalogGrid extends React.Component {

  render() {
    return (
      <div>
        {this.props.items.map(
          (item, i) => {
            return (
              <div key={i} style={{ float: 'left' }}>
                <CatalogItem  {...item} productPage={'/product/' + item.sku}/>
              </div>
            );
          }
        )}
      </div>
    );
  }

}


CatalogGrid.propTypes = {
  items: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      sku: React.PropTypes.any.isRequired,
      brand: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      image: React.PropTypes.string
    })
  ).isRequired
};

CatalogGrid.defaultProps = {
  items: []
};
