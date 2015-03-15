var React = require('react');
var ShoppingList = require('./ShoppingList.react');

var Application = React.createClass({
  getInitialShoppingListItems: function () {
    return {};
  },

  render: function () {
    return (
      <div className="container">
        <ShoppingList items={this.getInitialShoppingListItems()} />
      </div>
    );
  }
});

module.exports = Application;
