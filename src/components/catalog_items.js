import React from 'react';
import CatalogItem from './catalog_item.js';


// A stateless, view-only component.
// This component takes properties, and uses them to render the view.
class CatalogItemsView extends React.Component {

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



// A component that stores data (as its internal state).
// The data is passes to view-only component(s) as properties.
// The render() method simply sets the properties of view-only components.
export default class CatalogItems extends React.Component {



  constructor(){
    super();
    this.state = { items: []};
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
    return (<CatalogItemsView items={this.state.items} />);
  }
}


