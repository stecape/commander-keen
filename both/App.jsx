import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import Login from './pages/Login';
import { withTracker } from 'meteor/react-meteor-data';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import FontIcon from 'react-md/lib/FontIcons';
import ListItems from './ListItems';
import AccountsUIWrapper from './components/AccountsUIWrapper';


class App extends Component {


  loading() {
    return <div className="loading">Loading...</div>;
  }

  getView() {

    this.navItems = ListItems.map((item) => {
      if (item.divider) {
        return item;
      }
      return {
        ...item,
        onClick: () => FlowRouter.go(item.to),
        active: FlowRouter.current().route.group.name == item.key ? true : false, 
      };
    });
    return this.props.canView() ?
      <NavigationDrawer
        toolbarTitle="Commander Keen"
        navItems={this.navItems}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.CLIPPED}
        temporaryIcon={<FontIcon>menu</FontIcon>}
        persistentIcon={<FontIcon>arrow_back</FontIcon>}
        drawerHeaderChildren={<AccountsUIWrapper />}
      >
        <section>
          <main>
            {this.props.yield}
          </main>
        </section>
      </NavigationDrawer>
      :
      <Login />;
  }

  render() {
    return <div className="app-root">
      <div className="container">
        {this.props.loggingIn ? this.loading() : this.getView()}
      </div>
    </div>;
  }
};

export default AppContainer = withTracker (() => {
  return {
    loggingIn: Meteor.loggingIn(),
    hasUser: !!Meteor.user(),
    isPublic( route ) {
      let publicRoutes = [
        'login'
      ];

      return publicRoutes.indexOf( route ) > -1;
    },
    canView() {
      return this.isPublic( FlowRouter.current().route.name ) || !!Meteor.user();
    }
  };
})(App);