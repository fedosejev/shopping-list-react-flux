var React = require('react');
var ShoppingList = require('./ShoppingList.react');

var Application = React.createClass({
  getShoppingListItems: function () {
    return {};
  },

  render: function () {
    return (
      <div className="container">
        <ShoppingList items={this.getShoppingListItems()} />
      </div>
    );
  }
});

module.exports = Application;
