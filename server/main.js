import '../imports/api/customers.js';
import '../imports/api/jobs.js';
import { ServiceConfiguration } from 'meteor/service-configuration';
 
 
Meteor.startup(() => {
ServiceConfiguration.configurations.upsert(
  { service: 'google' },
  {
    $set: {
    		blablabla
      },
    }
  );
});