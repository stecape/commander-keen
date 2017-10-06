import '../imports/api/customers.js';
import '../imports/api/jobs.js';
import { ServiceConfiguration } from 'meteor/service-configuration';
 
 
Meteor.startup(() => {
ServiceConfiguration.configurations.upsert(
  { service: 'google' },
  {
    $set: {
  		clientId: "1087941511441-vbg8naukooft9llagnvv80cg7t1gq527.apps.googleusercontent.com",
  		secret: "BLzLiP13Waxg0rNZZpe80hvX",
      	loginStyle: 'popup',
      },
    }
  );
});