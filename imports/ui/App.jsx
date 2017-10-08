import { Meteor } from 'meteor/meteor';
import React, { PureComponent } from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import ListItems from './Navi/ListItems';
import FontIcon from 'react-md/lib/FontIcons';

import AccountsUIWrapper from './Navi/AccountsUIWrapper/AccountsUIWrapper.jsx';
 
export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      key: ListItems.find(x => x.key == FlowRouter.getRouteName()).key,
      page: ListItems.find(x => x.key == FlowRouter.getRouteName()).primaryText,
    };
    
    this.navItems = ListItems.map((item) => {
      if (item.divider) {
        return item;
      }

      return {
        ...item,
        onClick: () => this.setPage(item.key, item.primaryText, item.to),
        active: item.key === ListItems.find(x => x.key == FlowRouter.getRouteName()).key, 
      };
    });
  }

  setPage = (key, page, to) => {
    this.navItems = this.navItems.map((item) => {
      if (item.divider) {
        return item;
      }

      return { ...item, active: item.key === key };
    });

    this.setState({ key, page });
    FlowRouter.go(to);
  };

  render () {
    return (
      <NavigationDrawer
        drawerTitle="Menu"
        toolbarTitle="Commander Keen"
        navItems={this.navItems}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.CLIPPED}
        temporaryIcon={<FontIcon>menu</FontIcon>}
        persistentIcon={<FontIcon>arrow_back</FontIcon>}
      >
        <section>
          <main>
            <AccountsUIWrapper />
            {this.props.content}
          </main>
        </section>
      </NavigationDrawer>
    );
  }
}