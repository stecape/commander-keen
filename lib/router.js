import React from 'react';
import {mount} from 'react-mounter';

const WelcomeComponent = ({name}) => (<p> Welcome, {name}</p>);

FlowRouter.route('/greeting/:name', {
    // do some action for this route
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
		mount(WelcomeComponent, {name: params.name});
    },

    name: "<abc>" // optional
});

FlowRouter.route('/', {
    // do some action for this route
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
    },

    name: "<abc>" // optional
});