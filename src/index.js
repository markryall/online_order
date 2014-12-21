var React = require('react');
var App = require('./App');
var emitter = require('./emitter');

emitter.on('addItem', function(item) {
  console.log('item added:', item);
})

React.render(<App />, document.body);
