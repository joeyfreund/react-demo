// Client (i.e. frontend) application entry point (i.e. main)
import React from 'react';
import {render} from 'react-dom';
import Catalog from './components/catalog/catalog.js';


render(
  <div>
    <h1>Demo Catalog</h1>
    <Catalog getUrl="/api/v1/products" />
  </div>,
  document.getElementById('root')
);
