// Client (i.e. frontend) application entry point (i.e. main)

import React from 'react';
import {render} from 'react-dom';
import HelloWorld from './components/hello.js';


render(
  <div>
    <h1>Welcome</h1>
    <HelloWorld/>
  </div>,
  document.getElementById('root')
);
