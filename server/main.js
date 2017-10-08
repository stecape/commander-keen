import '../imports/api/customers.js';
import '../imports/api/jobs.js';
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