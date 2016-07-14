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

// FIXME: React and Redux are currently wored together manually,
//        instead of using react-redux's connect() function.
//
//        This is not a huge problem, but we are giving up the performance
//        optimizations made in the connect method.
//        Specifically, the container-component created by connect()
//        implements the shouldComponentUpdate life-cycle event.


var store = createStore(reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
    <Route path="/" component={App} >
    	<IndexRoute component={Home}/>
  	<Route path="/catalog" component={Catalog}/>
  	<Route path="/product/:id" component={ProductPage} />
    </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
