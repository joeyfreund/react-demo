import React from 'react';


export default class HelloWorld extends React.Component {

  render() {
    return (
      <p>
        Hello, {this.props.name}! I am a React component
      </p>
    );
  }
}
