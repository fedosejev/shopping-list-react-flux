var React = require('react');
var List = require('./List.react');
var AddListItem = require('./AddListItem.react');

var ShoppingList = React.createClass({
  getInitialState: function () {
    return {
      list: {}
    };
  },

  updateList: function (list) {
    this.setState({
      list: list
    });
  },

  updateListItem: function (item) {
    var list = this.state.list;
    list[item.id] = item;

    this.updateList(list);
  },

  removeListItem: function (itemId) {
    var list = this.state.list;

    delete list[itemId];

    this.updateList(list);
  },

  removeAllListItems: function () {
    this.updateList({});
  },

  render: function () {
    var items = this.state.list;

    return (
      <div className="row">
        <div className="col-sm-6">
          <List items={items}
            removeListItem={this.removeListItem}
            removeAllListItems={this.removeAllListItems} />
        </div>
        <div className="col-sm-6">
          <AddListItem handleAddListItem={this.updateListItem} />
        </div>
      </div>
    );
  }
});

module.exports = ShoppingList;
