var React = require('react');
var Order = require('./Order');
var OrderForm = require('./OrderForm');

module.exports = React.createClass({
  render: function() {
    return <div className="content">
        <Order />
        <OrderForm />
      </div>;
  }
});
