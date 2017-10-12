import { Meteor } from 'meteor/meteor';
import React, { PureComponent } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class Login extends PureComponent {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <AccountsUIWrapper />
    );
  }
}