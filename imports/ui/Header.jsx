import React, { PropTypes } from 'react';
import Clock from './Header/Clock';
import Navi from './Header/Navi';

export default class Header extends React.Component {
  render () {
    return (
      <div>
      	<h1>Header</h1>
        <Navi />
      	<Clock/>
      </div>
    );
  }
}