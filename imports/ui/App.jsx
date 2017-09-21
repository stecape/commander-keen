import React, { Component } from 'react';
 
import Navi from './Navi.jsx';
 
// App component - represents the whole app
export default class App extends Component {

  render() {
    return (
      <div className="container">
        <header>
          <h1>Commander Keen</h1>
        </header>
        <Navi />
      </div>
    );
  }
}