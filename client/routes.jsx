import React from 'react';
import {mount} from 'react-mounter';

import App from '../imports/ui/App.jsx';
import Home from '../imports/pages/Home';
import CustomersList from '../imports/pages/Customers';
import JobsList from '../imports/pages/Jobs';

FlowRouter.route("/", {
  action: function () {
    mount(App, {
        content: (<Home/>)
    });
  },
  name: 'home'
});


FlowRouter.route("/customers/", {
  action: function () {
    mount(App, {
        content: (<CustomersList/>)
    });
  },
  name: 'customers'
});

FlowRouter.route("/jobs/", {
  action: function () {
    mount(App, {
        content: (<JobsList/>)
    });
  },
  name: 'jobs'
});