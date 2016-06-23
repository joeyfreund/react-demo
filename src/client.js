// Client (i.e. frontend) application entry point (i.e. main)

import React from 'react';
import {render} from 'react-dom';
import HelloWorld from './components/hello.js';

const myClickHandler = (e) => {
	e.preventDefault();
	alert('You clicked me.')
};


render(
  <div>
    <h1>Welcome</h1>
    <HelloWorld name="Dave" callback={ myClickHandler }/>
  </div>,
  document.getElementById('root')
);
