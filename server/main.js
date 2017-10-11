import '../both/api/customers.js';
import '../both/api/contacts.js';
import '../both/api/jobs.js';
import { ServiceConfiguration } from 'meteor/service-configuration';
 
Meteor.startup(() => {
	ServiceConfiguration.configurations.upsert(
	  { service: 'google' },
		  {
	  	  $set: {
		    	clientId: Meteor.settings.clientId,
		    	secret: Meteor.settings.secret,
	 	    	loginStyle: 'popup',
	      },
	    }
	  )
	}
)