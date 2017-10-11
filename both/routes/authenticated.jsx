import React from 'react';
import {mount} from 'react-mounter';

import App from '../App';
import Home from '../pages/Home';
import CustomersList from '../pages/Customers';
import JobsList from '../pages/Jobs';
import Times from '../pages/Times';

const authenticatedRoutes = FlowRouter.group( { name: 'authenticated' } );

const homeAuthRoutes = authenticatedRoutes.group( { name: 'home' } );
homeAuthRoutes.route( '/home', {
  name: 'home',
  action() { 
    FlowRouter.redirect('/')
  }
});

homeAuthRoutes.route( '/', {
  name: 'home',
  action() { 
    mount( App, { yield: <Home /> } ); 
  }
});

const customersAuthRoutes = authenticatedRoutes.group( { name: 'customers' } );
customersAuthRoutes.route( '/customers', {
  name: 'customers',
  action() { 
    mount( App, { yield: <CustomersList /> } ); 
  }
});

const jobsAuthRoutes = authenticatedRoutes.group( { name: 'jobs' } );
jobsAuthRoutes.route( '/jobs', {
  name: 'jobs',
  action() { 
    mount( App, { yield: <JobsList /> } ); 
  }
});

const timesAuthRoutes = authenticatedRoutes.group( { name: 'times' } );
timesAuthRoutes.route( '/times', {
  name: 'times',
  action() { 
    mount( App, { yield: <Times /> } ); 
  }
});