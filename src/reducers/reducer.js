module.exports = function(state, action){
  switch (action.type) {
    case 'ITEMS_UPDATED':
      return Objects.assign({}, state, {items: action.items});
    case 'FILTER_TEXT_CHANGED':
      return Objects.assign({}, state, {filterText: action.filterText});
    default:
      return state;
  }
};
