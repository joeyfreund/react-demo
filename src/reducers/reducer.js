module.exports = function(state, action){

  // FIXME: We should probably not leave log messages in an application,
  //        but this one is really useful for debugging (and our application
  //        is very much work-in-progress)
  console.log('Reducer called with', state, action);

  if(! state){
    return { items: [], filterText: ''};
  }

  switch (action.type) {
    case 'ITEMS_UPDATED':
      return Object.assign({}, state, {items: action.items});
    case 'FILTER_TEXT_CHANGED':
      return Object.assign({}, state, {filterText: action.filterText});
    default:
      return state;
  }
};
