/** @jsx React.DOM */

var React = require('react/addons');

var MyComponent = React.createClass({

  componentDidMount: function () {
  },

  render: function () {
    return (
      <div id="my-component">
        <p> My Component </p>
      </div>
    )
  },

});

/* Module.exports instead of normal dom mounting */
module.exports = MyComponent;
