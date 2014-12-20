var React = require('react');

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
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input id="quantity" type="text" className="form-control" value={ current.quantity } onChange={ this.onChange } />
          </div>
          <button id="submit" type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>;
  }
});
