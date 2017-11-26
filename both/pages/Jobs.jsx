import React, { PureComponent  } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Mongo } from 'meteor/mongo';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import Tooltipped from 'react-md';

import { Jobs } from '../api/jobs.js';
import { Customers } from '../api/customers.js';
import TableActions from './Jobs/TableActions'
import RemoveDialog from './Jobs/RemoveDialog'
import AddDialog from './Jobs/AddDialog'
import Filter from './Jobs/Filter'


class JobsList extends PureComponent  {
  constructor(props){
    super(props);
    this.state = { 
      count:         0,
      jobs:          [],
      dialogVisible: false,
      addVisible:    false,
      criterio:      "",
      _id:           "",
      customer_id:   "",
      customer_name: "",
      description:   "",
      address:       "",
      status:        "",
      color:         "",
    }

    this.filtr = this.filtr.bind (this)
  }

  filtr = (testo) => {
    this.setState({ criterio: testo })
    this.setJobs(testo, this.state.jobs)
  }

  setJobs = (testo, jobs) => {

    condition = (testo, job) => {
      return (
        this.props.customers.filter ( customer => 
          ( customer._id._str == job.customer_id._str ) && 
          ( customer.name.indexOf(testo) >= 0 )
        ).length > 0                               ||
        testo == ""                                ||
        job.description.indexOf(testo)>=0          ||
        job.address.indexOf(testo)>=0              ||
        job.status.indexOf(testo)>=0               ||
        job.color.indexOf(testo)>=0
    )}

    let jobsList = jobs.map ( job => {
      try {
        job.customer_name = Customers.findOne({_id: job.customer_id}).name
        Jobs.upsert({_id: job._id}, {$set: {customer_name: job.customer_name}}) 
        job.customerNameError = false
      } catch(e) {
        job.customer_name = job.customer_name 
        job.customerNameError = true
      }
      job.hide = !condition(testo, job)
      return job
    })

    let count = jobs.filter(job => job.selected).length
    this.setState ({ jobs:  jobsList })
    this.setState ({ count: count    })
  }


  renderCustomerName = (error, name) => {
    if (error) {
      var style = { color: 'red' } 
      return(
        <TableColumn style={style}>
            <FontIcon error>error</FontIcon> {name} 
        </TableColumn>)
    } else { 
      return(<TableColumn>{name}</TableColumn>)      
    }
  }

  renderJobs = () => {

    return this.state.jobs.map ( (job) => {
      if (!job.hide) {
          return ( 
            <TableRow key={job._id}>
              {this.renderCustomerName(job.customerNameError, job.customer_name)}
              <TableColumn grow>{job.description}</TableColumn>
              <TableColumn>{job.address}</TableColumn>
              <TableColumn>{job.status}</TableColumn>
              <TableColumn>{job.color}</TableColumn>
            </TableRow>
          )
        }
      }
    )
  } 

  check = (row, selected) => {
    let jobs = this.state.jobs
    if (row === 0) {
      jobs = jobs.map((job) => {
        if (!job.hide) job.selected = selected
        return job
      })
    } else {
      let conteggio = row -1
      jobs = jobs.map((job) => {
        if (!job.hide){ 
          if (conteggio == 0) job.selected = selected
          conteggio--
        }
        return job
      })
    }

    let count = jobs.filter(job => job.selected).length
    this.setState({ jobs:  jobs  })
    this.setState({ count: count })

  }

  componentDidMount = () => {
    this.setJobs(this.state.criterio, this.props.jobs)
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.jobs && this.props.jobs !== nextProps.jobs) this.setJobs(this.state.criterio, nextProps.jobs)
  }

  remove = () => {

    let jobsToBeRemoved = this.state.jobs.filter(job => job.selected)
    jobsToBeRemoved.map(job => Jobs.remove({_id: job._id}))

    this.hideRemoveDialog()
  }

  add = (job) => {
    Jobs.update(
      {
        _id: job._id
      },
      {
        customer_id:   job.customer_id,
        customer_name: job.customer_name,
        description:   job.description,
        address:       job.address,
        status:        job.status,
        color:         job.color,
      },
      {
        upsert: true
      }
    )
    this.hideAddDialog()
  }

  showRemoveDialog = () => this.setState ({ dialogVisible: true  })

  hideRemoveDialog = () => this.setState ({ dialogVisible: false })

  showAddDialog    = () => this.setState ({ addVisible: true     })

  hideAddDialog    = () => 
    this.setState ({ 
      _id:          "",
      customer_id:  "",
      customer_name:"",
      description:  "",
      address:      "",
      status:       "",
      color:        "",
      addVisible:   false
  })    

  showEditDialog    = () => {
    let selectedJob = this.state.jobs.filter(job => job.selected)[0]

    this.setState ({ 
      _id:          selectedJob._id,
      customer_id:  selectedJob.customer_id,
      customer_name:selectedJob.customer_name,
      description:  selectedJob.description,
      address:      selectedJob.address,
      status:       selectedJob.status,
      color:        selectedJob.color,
      addVisible:   true
    })
  }
  

  render() {
    return (
      <div>
        <div className="md-grid--40-16">
          <Card tableCard>
            <TableActions
              count         = {this.state.count}
              onRemoveClick = {this.showRemoveDialog}
              onEditClick   = {this.showEditDialog}
            />
            <div className="md-cell--3 md-cell--right">
              <Filter filtr={this.filtr} />
            </div>
            <DataTable baseId="jobs-table" onRowToggle={this.check}>
              <TableHeader>
                <TableRow>
                  <TableColumn>Customer</TableColumn>
                  <TableColumn>Job Description</TableColumn>
                  <TableColumn>Address</TableColumn>
                  <TableColumn>Job Status</TableColumn>
                  <TableColumn>Color</TableColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {this.renderJobs()}
              </TableBody>
            </DataTable>
            <RemoveDialog
              onRemove= {this.remove}
              onHide  = {this.hideRemoveDialog}
              visible = {this.state.dialogVisible}
            />
            <AddDialog
              onAdd        = {this.add}
              onHide       = {this.hideAddDialog}
              visible      = {this.state.addVisible}
              _id          = {this.state._id}
              customer_id  = {this.state.customer_id}
              customer_name= {this.state.customer_name}
              description  = {this.state.description}
              address      = {this.state.address}
              status       = {this.state.status}
              color        = {this.state.color}
              customers    = {this.props.customers}
            />
          </Card>
        </div>
        <Button
          secondary
          floating
          onClick     = {this.showAddDialog}
          className   = 'floatingbutton'
        >
          add
        </Button>
      </div>
    );
  }
}

export default withTracker (() => {



  this.state = {
    jobs: Jobs
      .find({}, { sort: {'_id': 1} })
      .fetch(),
    customers: Customers
      .find({}, { sort: { name: 1 } })
      .fetch(),
  }

  return {
    jobs: this.state.jobs,
    customers: this.state.customers
  };
})(JobsList);