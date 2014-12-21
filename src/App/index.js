var React = require('react');
var SelectInput = require('../inputs/SelectInput');
var TextInput = require('../inputs/TextInput');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      current: {}
    };
  },

  onChange: function(event) {
    var id = event.target.id;
    var value = event.target.value;
    var current = this.state.current || {};
    console.log(id, value);
    current[id] = value;
    this.setState({current: current});
  },

  submit: function(event) {
    console.log(this.state.current);
    event.preventDefault();
  },

  render: function() {
    var current = this.state.current;
    var products = [
      'White Chocolate and Raspberry Muffin',
      'Croissant with Jam',
      'Chocolate Éclair'
    ];
    console.log(current);
    return <div className="content">
        <form className="orderForm" role="form" onSubmit={ this.submit }>
          <SelectInput id="product" label="Product" onChange={ this.onChange } value={ current.product } options={ products } />
          <TextInput id="quantity" label="Quantity" onChange={ this.onChange } value={ current.quantity } />
          <button id="submit" type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>;
  }
});
