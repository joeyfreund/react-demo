import React from 'react';


export default class HelloWorld extends React.Component {

  render() {
    return (
      <p onClick={this.props.callback}>
        Hello, {this.props.name}! I am a React component
      </p>
    );
  }
}
