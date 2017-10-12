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
import { Grid, Cell } from 'react-md'

import { Customers } from '../api/customers.js'
import { Contacts } from '../api/contacts.js'
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
      address:       ""
    }

    this.filtr = this.filtr.bind (this)
  }

  filtr = (testo) => this.setState ({ criterio: testo })

  renderCustomers = () => {
    return this.props.customers.map ( customer => { 
      if (this.state.criterio == "" || customer.name.indexOf(this.state.criterio)>=0 || customer.email.indexOf(this.state.criterio)>=0 || customer.address.indexOf(this.state.criterio)>=0) {
        return ( 
          <TableRow key={customer._id}>
            <TableColumn grow>{customer.name}</TableColumn>
            <TableColumn>{customer.email}</TableColumn>
            <TableColumn>{customer.address}</TableColumn>
          </TableRow>
        )
      }
    })
  }  

  check = (row, selected, count) => {
    let customers = this.props.customers.slice()
    if (row === 0) {
      customers = customers.map((customer) => {
        customer.selected = selected
        return customer
      })
    } else {
      customers[row - 1].selected = selected
    }

    this.setState({customers: customers})
    this.setState({count: count})

  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.customers && this.props.customers !== nextProps.customers)
      this.setState({ count: 0 })
  }

  remove = () => {

    let customersToBeRemoved = this.state.customers.filter(customer => customer.selected)
    customersToBeRemoved.map(customer => Customers.remove({_id: customer._id}))

    this.hideRemoveDialog()
  }

  add = (e) => {
    let customer     = {}
    customer._id     = new Mongo.ObjectID(e.target.elements._id.value)
    customer.name    = e.target.elements.name.value
    customer.email   = e.target.elements.email.value
    customer.address = e.target.elements.address.value

    Customers.update(
      {
        _id: customer._id
      },
      {
        name: customer.name,
        email: customer.email,
        address: customer.address
      },
      {
        upsert: true
      }
    )
    this.setState ({ 
      _id:        "",
      name:       "",
      email:      "",
      address:    "",
      addVisible: true
    })    
    this.hideAddDialog()
  }

  showRemoveDialog = () => this.setState ({ dialogVisible: true  })

  hideRemoveDialog = () => this.setState ({ dialogVisible: false })

  showAddDialog    = () => this.setState ({ addVisible: true     })

  hideAddDialog    = () => this.setState ({ addVisible: false    })

  showEditDialog    = () => {
    let selectedCustomer = this.state.customers.filter(customer => customer.selected)[0]

    this.setState ({ 
      _id:        selectedCustomer._id,
      name:       selectedCustomer.name,
      email:      selectedCustomer.email,
      address:    selectedCustomer.address,
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
                </TableRow>
              </TableHeader>
              <TableBody>
                {this.renderCustomers()}
              </TableBody>
            </DataTable>
            <RemoveDialog
              onRemove= {this.remove}
              onHide  = {this.hideRemoveDialog}
              visible = {this.state.dialogVisible}
            />
            <AddDialog
              onAdd   = {this.add}
              onHide  = {this.hideAddDialog}
              visible = {this.state.addVisible}
              _id     = {this.state._id}
              name    = {this.state.name}
              email   = {this.state.email}
              address = {this.state.address}
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


export default CustomersListContainer = withTracker (() => {

  let customers = Customers
    .find({}, { sort: { name: 1 } })
    .fetch()
    .map((customer) => {return {...customer, selected: false}})



  return {
    customers: customers,
  }
})(CustomersList)