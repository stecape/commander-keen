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
            <DataTable baseId="customers-table">
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
  return {
    customers: Customers.find({}).fetch(),
  };
})(CustomersList);