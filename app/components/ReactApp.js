/** @jsx React.DOM */

var React = require('react/addons');
var MyComponent = require('./MyComponent.js');

var ReactApp = React.createClass({

  componentDidMount: function () {
  },

  render: function () {
    return (
      <MyComponent />
    )
  },

});

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;
