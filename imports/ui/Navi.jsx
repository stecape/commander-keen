import React, { PropTypes } from 'react';

class Navi extends React.Component {
  render () {
    return (
      <ul>
        <li>
          <a href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/greeting/Ste">
            Ste
          </a>
        </li>
      </ul>
    );
  }
}

export default Navi;