var React = require('react');
var List = require('./List.jsx');
var AddListItem = require('./AddListItem.jsx');
var ListItemStore = require('../stores/ListItemStore');

var ShoppingList = React.createClass({
  
  getInitialState: function () {
    return this.getList();
  },

  updateState: function () {
    this.setState(this.getList());
  },

  getList: function () {
    return {
      list: ListItemStore.getAllListItems()
    };
  },

  componentDidMount: function () {
    ListItemStore.addChangeListener(this.updateState);
  },

  componentWillUnmount: function () {
    ListItemStore.removeChangeListener(this.updateState);
  },

  render: function () {
    var items = this.state.list;

    return (
      <div className="row">
        <div className="col-sm-6">

          <List items={items} />
            
        </div>
        <div className="col-sm-6">

          <AddListItem />
        
        </div>
      </div>
    );
  }
});

module.exports = ShoppingList;
