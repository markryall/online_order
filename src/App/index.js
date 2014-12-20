var React = require('react');

module.exports = React.createClass({
  render: function() {
    var content = this.props.content;
    return <p>{ content }</p>;
  }
});
