var React = require('react');
var OrderForm = require('./OrderForm');

module.exports = React.createClass({
  render: function() {
    return <div className="content">
        <OrderForm />
      </div>;
  }
});
