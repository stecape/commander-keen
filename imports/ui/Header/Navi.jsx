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
          <a href="/customers/">
            Customers
          </a>
        </li>
        <li>
          <a href="/jobs/">
            Jobs
          </a>
        </li>
      </ul>
    );
  }
}

export default Navi;