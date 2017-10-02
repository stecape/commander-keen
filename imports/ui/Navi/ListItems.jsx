import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';

export default [{
  key: 'home',
  primaryText: 'Home',
  leftIcon: <FontIcon>home</FontIcon>,
  to: '/',
  active: true,
}, {
  key: 'customers',
  primaryText: 'Customers',
  leftIcon: <FontIcon>face</FontIcon>,
  to: '/customers',
}, {
  key: 'jobs',
  primaryText: 'Jobs',
  leftIcon: <FontIcon>assignment</FontIcon>,
  to: '/jobs',
}, {
  key: 'times',
  primaryText: 'Times',
  leftIcon: <FontIcon>schedule</FontIcon>,
  to: '/times',
}];