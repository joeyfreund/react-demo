import React from 'react';

// Another stateless, view-only component.
export default class SearchBar extends React.Component {

  constructor(){
    super();
    // No auto-binding with ES6 classes (see https://facebook.github.io/react/docs/reusable-components.html#no-autobinding)
    this.handleOnChange = this.handleOnChange.bind(this);
  }


  handleOnChange(event){
    this.props.textChanged(event.target.value.trim());
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search..." 
            onChange={this.handleOnChange} />
      </div>
    );
  }
}


SearchBar.propTypes = {
  textChanged: React.PropTypes.func.isRequired
};
