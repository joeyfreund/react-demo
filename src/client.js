// Client (i.e. frontend) application entry point (i.e. main)

import React from 'react';
import {render} from 'react-dom';
import CatalogItems from './components/catalog_items.js';


render(
  <div>
    <h1>Demo Catalog</h1>
    <CatalogItems getUrl="/api/v1/products" />
  </div>,
  document.getElementById('root')
);
