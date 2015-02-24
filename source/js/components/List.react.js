var React = require('react');
var ListItem = require('./ListItem.react');

var ListHeader = React.createClass({
  handleSubmit: function (event) {
    event.preventDefault();

    this.props.removeAllListItems();
  },

  render: function () {
    var totalNumberOfListItems = this.props.totalNumberOfListItems;

    if (totalNumberOfListItems > 0) {
      return (
        <form onSubmit={this.handleSubmit} className="form-inline">
          {this.props.totalNumberOfListItems} {totalNumberOfListItems === 1 ? 'item' : 'items'}
          {' '}
          <button className="btn btn-xs btn-default" type="submit">Remove all</button>
        </form>
      );
    }

    return (<span>Shopping List</span>);
  }
});

var EmptyList = React.createClass({
  render: function () {
    return (
      <div>
        There are no items in your list.
      </div>
    );
  }
});

var List = React.createClass({
  getListOfItemIds: function (items) {
    return Object.keys(items);
  },

  getTotalNumberOfListItems: function (items) {
    var totalNumberOfItems = 0;
    var item;

    this.getListOfItemIds(items).forEach(function (itemId) {
      item = items[itemId];
      totalNumberOfItems = totalNumberOfItems + parseInt(item.quantity, 10);
    });

    return totalNumberOfItems;
  },

  createListItemElements: function (items) {
    var item;

    return (
      this
      .getListOfItemIds(items)
      .map(function (itemId) {
        item = items[itemId];
        return (<ListItem item={item} handleRemoveListItem={this.props.removeListItem} key={item.id} />);
      }.bind(this))
      .reverse()
    );
  },

  render: function () {
    var items = this.props.items;
    var listItemElements = this.createListItemElements(items);

    return (
      <div>
        <h3 className="page-header">
          <ListHeader
            totalNumberOfListItems={this.getTotalNumberOfListItems(items)}
            removeAllListItems={this.props.removeAllListItems} />
        </h3>
        <ul>{listItemElements.length > 0 ? listItemElements : <EmptyList />}</ul>
      </div>
    );
  }
});

module.exports = List;
