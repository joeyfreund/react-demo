// Client (i.e. frontend) application entry point (i.e. main)
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import { createStore } from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer.js'

import App from './components/app.js';
import Home from './components/home.js';
import Catalog from './components/catalog/catalog.js';
import ProductPage from './components/product_page.js';


var store = createStore(reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
    <Route path="/" component={App} >
    	<IndexRoute component={Home}/>
  	<Route path="/catalog" component={Catalog}/>
  	<Route path="/product/:sku" component={ProductPage} />
    </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
