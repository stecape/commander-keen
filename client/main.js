import React from 'react';
import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';
import { Accounts } from 'meteor/accounts-base' 

 
 
Meteor.startup(() => {

  Accounts.ui.config({
    requestPermissions: {
      google: [
          'https://www.googleapis.com/auth/contacts',
          'https://www.google.com/m8/feeds/'
      ]
    },
	  requestOfflineToken: {
	    google: true
	  }
	});
});