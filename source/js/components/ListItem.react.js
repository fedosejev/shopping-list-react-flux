var React = require('react');

var Description = React.createClass({
  render: function () {
    return (
      <div className="panel-body">
        {this.props.description}
      </div>
    );
  }
});

var ListItem = React.createClass({
  handleSubmit: function (event) {
    event.preventDefault();

    this.props.handleRemoveListItem(this.props.item.id);
  },

  render: function () {
    var item = this.props.item;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          {item.quantity} x {item.name}
        </div>

        {item.description.length > 0 ? <Description description={item.description} /> : ''}

        <div className="panel-footer">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <button type="submit" className="btn btn-default btn-xs">Remove</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = ListItem;
