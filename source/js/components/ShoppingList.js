var React = require('react');
var List = require('./List');
var AddListItem = require('./AddListItem');

var ShoppingList = React.createClass({
  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">

            <List />
              
          </div>
          <div className="col-sm-6">

            <AddListItem />
          
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ShoppingList;
