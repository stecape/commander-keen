import React from 'react';
import {mount} from 'react-mounter';

import App from '../imports/ui/App.jsx';
import Home from '../imports/pages/Home';
import CustomersList from '../imports/pages/Customers';
import JobsList from '../imports/pages/Jobs';

FlowRouter.route("/", {
  action() {
    mount(App, {
        content: (<Home/>)
    });
  }
});


FlowRouter.route("/customers/", {
  action() {
    mount(App, {
        content: (<CustomersList/>)
    });
  }
});

FlowRouter.route("/jobs/", {
  action() {
    mount(App, {
        content: (<JobsList/>)
    });
  }
});