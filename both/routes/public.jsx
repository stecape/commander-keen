import React from 'react';
import {mount} from 'react-mounter';

import App from '../App';
import Login from '../pages/Login';

const publicRoutes = FlowRouter.group( { name: 'public' } );

publicRoutes.route( '/login', {
  name: 'login',
  action() { 
    mount( App, { yield: <Login /> } ); 
  }
});