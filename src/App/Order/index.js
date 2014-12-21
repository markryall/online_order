var React = require('react');
var emitter = require('../../emitter');
var _ = require('lodash');

module.exports = React.createClass({
  getInitialState: function() {
    return { items: [] };
  },

  componentWillMount: function() {
    var component = this;
    emitter.on('addItem', function(item) {
      var items = component.state.items;
      var existingProductItem = _.find(items, function(existingItem) {
        return existingItem.product == item.product;
      });
      if (existingProductItem) {
        existingProductItem.quantity += item.quantity;
      } else {
        items.push(item);
      }
      component.setState({ items: items });
    })
  },

  placeOrder: function() {
    console.log('placing order', this.state.items);
    this.setState({items: []});
  },

  render: function() {
    var items = this.state.items;
    if (items.length == 0) {
      return null;
    } else {
      return <div id="items">
        { _.map(items, function(item) { return <div>{item.quantity} x {item.product}</div> }) }
        <button id="submit" type="submit" className="btn btn-primary" onClick={ this.placeOrder }>Place Order</button>
      </div>;
    }
  }
});
