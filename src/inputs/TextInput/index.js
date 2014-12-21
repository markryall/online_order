var React = require('react');

module.exports = React.createClass({
  render: function() {
    var props = this.props;
    return <div className="form-group">
      <label htmlFor={ props.id }>{ props.label }</label>
      <input id={ props.id } type="text" className="form-control" value={ props.value } onChange={ props.onChange } />
    </div>
  }
});
