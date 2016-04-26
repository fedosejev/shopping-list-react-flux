var React = require('react');

var EmptyList = React.createClass({
  render: function () {
    return (
      <div>
        There are no items in your list. Updated.
      </div>
    );
  }
});

module.exports = EmptyList;