var Dispatcher = require('../dispatcher/Dispatcher');

function addListItem(item) {
  var action = {
    type: 'add_list_item',
    item: item
  };
  
  Dispatcher.dispatch(action);
}

function removeListItem(itemId) {
  var action = {
    type: 'remove_list_item',
    itemId: itemId
  };
  
  Dispatcher.dispatch(action);
}

function removeAllListItems() {
  var action = {
    type: 'remove_all_list_items'
  };
  
  Dispatcher.dispatch(action);
}

module.exports = {
  addListItem: addListItem,
  removeListItem: removeListItem,
  removeAllListItems: removeAllListItems
};