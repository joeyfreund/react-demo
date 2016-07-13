// Client (i.e. frontend) application entry point (i.e. main)
import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/app.js';
import Home from './components/home.js';
import Catalog from './components/catalog/catalog.js';
import ProductPage from './components/product_page.js';

// FIXME: Currently there is one major issue with our application:
//        - React and Redux are not wired together correctly.
//        - We should really use react-redux's connect function to do the wiring
//          for us.
//        - Unfortunately, we did not get a chance to into the details of
//          the connect function, and tried to wire things together manually.
//        - We are currently hacking two things:
//          1. We made the Redux store a global object (instead of letting
//             react-redux pass it from the Provider to all the components down
//             the tree)
//          2. In the Catalog component, we subscribe to the store and call
//             this.forceUpdate(), instead of this.render().
//             This is very bad, because it means that React will actually
//             modify the DOM every time (instead of using the render() method
//             which does a smart diff and touches the DOM only if it needs to).


var store = require('./store.js');

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
