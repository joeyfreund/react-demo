// Client (i.e. frontend) application entry point (i.e. main)

import React from 'react';
import {render} from 'react-dom';
import HelloWorld from './components/hello.js';
import CatalogItems from './components/catalog_items.js';


const myClickHandler = (e) => {
	e.preventDefault();
	alert('You clicked me.')
};


const FAKE_DATA = [
  {brand: 'Chloe', product: 'Blue Denim Dress', image: 'https://res.cloudinary.com/ssenseweb/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_560/v489/162338F052002_1.jpg'},
  {brand: 'Palm Angels', product: 'Blue USA Cap', image: 'https://res.cloudinary.com/ssenseweb/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_560/v488/161695M139003_1.jpg'},
  {brand: 'Blackmeans', product: 'Green Check Shirt', image: 'https://res.cloudinary.com/ssenseweb/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_560/v488/161625M192001_1.jpg'},
  {brand: 'Kenzo', product: 'Black Tiger T-Shirt', image: 'https://res.cloudinary.com/ssenseweb/image/upload/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_560/v488/162387F110001_1.jpg'}
]


render(
  <div>
    <h1>Welcome</h1>
    <HelloWorld name="Dave" callback={ myClickHandler }/>
    <CatalogItems items={FAKE_DATA} />
  </div>,
  document.getElementById('root')
);
