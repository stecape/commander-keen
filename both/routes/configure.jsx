import React from 'react';

Accounts.onLogin( () => {
  if ( Meteor.isClient ) {
    let path = FlowRouter.current().path;

    return path !== '/login' ? FlowRouter.go( path ) : FlowRouter.go( '/hidden' );
  }
});