var React = require('react');
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
    console.log(current);
    return <div className="content">
        <form className="orderForm" role="form" onSubmit={ this.submit }>
          <TextInput id="quantity" label="Quantity" onChange={ this.onChange } value={ current.quantity} />
          <button id="submit" type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>;
  }
});
