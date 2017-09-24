import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Jobs } from '../api/jobs.js';



class JobsList extends Component {
  renderJobs() {
    return this.props.jobs.map((job) => (
      <li key={job._id}>{job.customer} @ {job.address}, {job.createdAt.toLocaleTimeString()} </li>
    ));
  }
  render() {
    return (
      <div className="container">
        <header>
          <h1>Job List</h1>
        </header>
         <ul>
          {this.renderJobs()}
        </ul>
      </div>
    );
  }
}

Jobs.propTypes = {
  jobs: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    jobs: Jobs.find({}).fetch(),
  };
}, JobsList);