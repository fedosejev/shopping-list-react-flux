var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var shoppingList = {};

function addListItem(listItem) {
  shoppingList[listItem.id] = listItem;

  ListItemStore.emit('change');
}

function removeListItem(listItemId) {
  delete shoppingList[listItemId];

  ListItemStore.emit('change');
}

function removeAllListItems() {
  shoppingList = {};

  ListItemStore.emit('change');
}

var ListItemStore = objectAssign({}, EventEmitter.prototype, {
  
  getAllListItems: function () {
    return shoppingList;
  },

  addChangeListener: function (changeEventHandler) {
    this.on('change', changeEventHandler);
  },

  removeChangeListener: function (changeEventHandler) {
    this.removeListener('change', changeEventHandler);
  }

});

function handleAction(action) {
  if (action.type === 'add_list_item') {
    addListItem(action.item);
  } else if (action.type === 'remove_list_item') {
    removeListItem(action.itemId);
  } else if (action.type === 'remove_all_list_items') {
    removeAllListItems();
  }
}

ListItemStore.dispatchToken = Dispatcher.register(handleAction);

module.exports = ListItemStore;