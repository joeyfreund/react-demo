import { createStore } from 'redux';
import reducer from './reducers/reducer.js'

// FIXME: This is a hack
// The store should not be global.
// Once we use react-redux's connect function, it will make the stire available
// to all components in the component tree
module.exports = createStore(reducer);
