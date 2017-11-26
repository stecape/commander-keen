import React, { PureComponent  } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Mongo } from 'meteor/mongo';

import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'
import DataTable from 'react-md/lib/DataTables/DataTable'
import TableHeader from 'react-md/lib/DataTables/TableHeader'
import TableBody from 'react-md/lib/DataTables/TableBody'
import TableRow from 'react-md/lib/DataTables/TableRow'
import TableColumn from 'react-md/lib/DataTables/TableColumn'
import Button from 'react-md/lib/Buttons/Button'

import { Customers } from '../api/customers.js'
import { Jobs } from '../api/jobs.js'
import TableActions from './Customers/TableActions'
import RemoveDialog from './Customers/RemoveDialog'
import AddDialog from './Customers/AddDialog'
import Filter from './Customers/Filter'



class CustomersList extends PureComponent  {
  constructor(props){
    super(props)
    this.state = { 
      count:         0,
      customers:     [],
      dialogVisible: false,
      addVisible:    false,
      criterio:      "",
      _id:           "",
      name:          "",
      email:         "",
      address:       "",
      color:         "",
    }

    this.filtr = this.filtr.bind (this)
  }

  filtr = (testo) => {
  	this.setState({ criterio: testo })
  	this.setCustomers(testo, this.state.customers)
	}

	setCustomers = (testo, customers) => {

		condition = (testo, customer) => {
      return (
        testo == ""                        ||
        customer.name.indexOf(testo)>=0    ||
        customer.email.indexOf(testo)>=0   || 
        customer.address.indexOf(testo)>=0 ||
        customer.color.indexOf(testo)>=0
    )}

		let customersList = customers.map ( customer =>  {
			customer.hide = !condition(testo, customer) 
			return customer
		})

    let count = customers.filter(customer => customer.selected).length
	  this.setState ({ customers: customersList })
    this.setState ({ count:     count         })
	}

  renderCustomers = () => {

    return this.state.customers.map ( (customer) => {
    	if (!customer.hide) {
        	return ( 
            <TableRow key={customer._id} selected={customer.selected}>
              <TableColumn grow>{customer.name}</TableColumn>
              <TableColumn>{customer.email}</TableColumn>
              <TableColumn>{customer.address}</TableColumn>
              <TableColumn>{customer.color}</TableColumn>
            </TableRow>
          )
    	  }
    	}
    )
  } 

  check = (row, selected) => {
    let customers = this.state.customers
    if (row === 0) {
      customers = customers.map((customer) => {
				if (!customer.hide) customer.selected = selected
        return customer
      })
    } else {
    	let conteggio = row -1
    	customers = customers.map((customer) => {
    		if (!customer.hide){ 
    			if (conteggio == 0) customer.selected = selected
    			conteggio--
    		}
    		return customer
    	})
    }

    let count = customers.filter(customer => customer.selected).length
    this.setState({customers: customers })
    this.setState({count: count })

  }

  componentDidMount = () => {
  	this.setCustomers(this.state.criterio, this.props.customers)
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.customers && this.props.customers !== nextProps.customers) this.setCustomers(this.state.criterio, nextProps.customers)
  }

  remove = (customers) => {
    customers.map(customer => Customers.remove({_id: customer._id}))
    this.hideRemoveDialog()
  }

  add = (customer) => {
    Customers.update(
      {
        _id: customer._id
      },
      {
        name:    customer.name,
        email:   customer.email,
        address: customer.address,
        color:   customer.color,
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
      _id:        "",
      name:       "",
      email:      "",
      address:    "",
      color:      "",
      addVisible: false
  })    

  showEditDialog    = () => {
    let selectedCustomer = this.state.customers.filter(customer => customer.selected)[0]

    this.setState ({ 
      _id:        selectedCustomer._id,
      name:       selectedCustomer.name,
      email:      selectedCustomer.email,
      address:    selectedCustomer.address,
      color:      selectedCustomer.color,
      addVisible: true
    })
  }
  

  render = () => {
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
            <DataTable baseId="customers-table" onRowToggle={this.check}>
              <TableHeader>
                <TableRow>
                  <TableColumn>Name</TableColumn>
                  <TableColumn>Email</TableColumn>
                  <TableColumn>Address</TableColumn>
                  <TableColumn>Color</TableColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {this.renderCustomers()}
              </TableBody>
            </DataTable>
            <RemoveDialog
              onRemove = {this.remove}
              onHide   = {this.hideRemoveDialog}
              visible  = {this.state.dialogVisible}
              jobs     = {this.props.jobs}
              customers= {this.state.customers.filter(customer => customer.selected)}
            />
            <AddDialog
              onAdd   = {this.add}
              onHide  = {this.hideAddDialog}
              visible = {this.state.addVisible}
              _id     = {this.state._id}
              name    = {this.state.name}
              email   = {this.state.email}
              address = {this.state.address}
              color   = {this.state.color}
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
    )
  }
}


export default withTracker (() => {



  this.state = {
  	customers: Customers
    	.find({}, { sort: { name: 1 } })
    	.fetch(),
    jobs: Jobs
      .find({}, { sort: { name: 1 } })
      .fetch()
  }

  return {
    customers: this.state.customers,
    jobs:      this.state.jobs
  }
})(CustomersList)