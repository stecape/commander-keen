import React, { PropTypes } from 'react';

export default class Clock extends React.Component {
  render () {
    return (
	    <div>
	      <h1>Hello, world!</h1>
	      <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}