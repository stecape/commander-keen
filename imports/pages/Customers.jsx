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

import { Customers } from '../api/customers.js';

class CustomersList extends PureComponent  {
  constructor(props){
    super(props);
  }

  renderCustomers() {
    return this.props.customers.map((customer) => ( 
        <TableRow key={customer._id}>
          <TableColumn grow>{customer.name}</TableColumn>
          <TableColumn>{customer.email}</TableColumn>
          <TableColumn>{customer.address}</TableColumn>
        </TableRow>
    ));
  }

  render() {
    return (
      <div>
        <div className="md-grid--40-16">
          <Card tableCard>
            <DataTable baseId="customers-table"  onRowToggle={this.props.check}>
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
          </Card>
        </div>
        <Button secondary floating className='floatingbutton'>add</Button>
      </div>
    );
  }
}

export default CustomersListContainer = withTracker (() => {

  state = {
    customers: Customers.find({}).fetch(),
    selectedRows: Customers.find({}).fetch().map(() => false),
    count: 0,
  }

  check = (row, selected, count) => {
    let selectedRows = this.state.selectedRows.slice();
    if (row === 0) {
      selectedRows = selectedRows.map(() => selected);
    } else {
      selectedRows[row - 1] = selected;
    }
    this.setState({ selectedRows: selectedRows});
    this.setState({ count: count});
  }

  return {
    customers: this.state.customers,
    check: check
  };
})(CustomersList);