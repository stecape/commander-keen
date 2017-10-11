import React, { PureComponent  } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import Button from 'react-md/lib/Buttons/Button';

import { Jobs } from '../api/jobs.js';
import { Customers } from '../api/customers.js';


class JobsList extends PureComponent  {
  constructor(props){
    super(props);
  }

  renderJobs() {
    return this.props.jobs.map((job) => ( 
        <TableRow key={job._id}>
          <TableColumn>{Customers.findOne({_id: job.customer_id}).name}</TableColumn>
          <TableColumn grow>{job.description}</TableColumn>
          <TableColumn>{job.address}</TableColumn>
          <TableColumn>{job.status}</TableColumn>
        </TableRow>
    ));
  }

  render() {
    return (
      <div>
        <div className="md-grid--40-16">
          <Card tableCard>
            <DataTable baseId="jobs-table">
              <TableHeader>
                <TableRow>
                  <TableColumn>Customer</TableColumn>
                  <TableColumn>Job Description</TableColumn>
                  <TableColumn>Address</TableColumn>
                  <TableColumn>Job Status</TableColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {this.renderJobs()}
              </TableBody>
            </DataTable>
          </Card>
        </div>
        <Button secondary floating className='floatingbutton'>add</Button>
      </div>
    );
  }
}

export default JobsListContainer = withTracker (() => {
  return {
    jobs: Jobs.find({}).fetch(),
    customers: Customers.find({}).fetch(),
  };
})(JobsList);