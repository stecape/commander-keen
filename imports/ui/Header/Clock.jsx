import React, { PropTypes } from 'react';

export default class Clock extends React.Component {
  constructor (props) {
  	super(props);

  	this.state = { date: new Date() };
  }

  tick() {
  	this.setState({date: new Date()});
  }

  componentDidMount() {
  	this.timerID = setInterval(() => this.tick(), 1000);
  }

  render () {	
    return (
	    <div>
	      <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}