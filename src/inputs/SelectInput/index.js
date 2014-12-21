var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
  render: function() {
    var props = this.props;

    return <div className="form-group">
      <label htmlFor={ props.id }>{ props.label }</label>
      <select id={ props.id } className="form-control" value={ props.value } onChange={ props.onChange }>
        { _.map(props.options, function(option) { return <option>{ option }</option>; }) }
      </select>
    </div>
  }
});
