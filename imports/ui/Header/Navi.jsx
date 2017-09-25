import React, { PureComponent } from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import SVGIcon from 'react-md/lib/SVGIcons';

const navItems = [{
  label: 'Home',
  to: '/',
  icon: 'home',
}, {
  label: 'Customers',
  to: '/customers',
  icon: 'bookmark',
}, {
  label: 'Jobs',
  to: '/jobs',
  icon: 'donut_large',
}];

export default class Navi extends PureComponent {
  render () {
    return (
      <NavigationDrawer
        drawerTitle="react-md with CRA"
        toolbarTitle="Welcome to react-md"
        navItems= {this.navItems}
      >
      </NavigationDrawer>
    );
  }
}