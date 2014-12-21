var React = require('react');
var SelectInput = require('../../inputs/SelectInput');
var TextInput = require('../../inputs/TextInput');
var emitter = require('../../emitter');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      current: {
        product: '',
        quantity: 1
      }
    };
  },

  onChange: function(event) {
    var id = event.target.id;
    var value = event.target.value;
    var current = this.state.current || {};
    current[id] = value;
    this.setState({current: current});
  },

  submit: function(event) {
    event.preventDefault();
    var current = this.state.current;
    current.quantity = Number(current.quantity);
    emitter.emit('addItem', current);
    this.setState(this.getInitialState());
  },

  render: function() {
    var current = this.state.current;
    var products = [
      '',
      'Crème brûlée',
      'White Chocolate and Raspberry Muffin',
      'Croissant with Jam',
      'Chocolate Éclair'
    ];
    return <form className="orderForm" role="form" onSubmit={ this.submit }>
      <SelectInput id="product" label="Product" onChange={ this.onChange } value={ current.product } options={ products } />
      <TextInput id="quantity" label="Quantity" onChange={ this.onChange } value={ current.quantity } />
      <button id="submit" type="submit" className="btn btn-primary">Add</button>
    </form>;
  }
});
