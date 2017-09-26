import React, { PureComponent  } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
 
import { Customers } from '../api/customers.js';



@connect(({ media: { mobile } }) => ({ mobile }))
class CustomersList extends PureComponent  {
  constructor(props){
    super(props);

    state = { slicedData: customers.slice(0, 10) };

  }


  static propTypes = {
    mobile: PropTypes.bool.isRequired,
    customers: PropTypes.array.isRequired,
  };

  
  handlePagination = (start, rowsPerPage) => {
    this.setState({ slicedData: customers.slice(start, start + rowsPerPage) });
  };


  renderCustomers() {
    return this.props.customers.map((customer) => (      
        <TableRow key={customer._id}>
          <TableColumn>{customer.name}</TableColumn>
          <TableColumn>{customer.email}</TableColumn>
          <TableColumn>{customer.address}</TableColumn>
        </TableRow>
    ));
  }
  render() {
    return (

      <Card className="md-block-centered">
        <CardTitle title="Customers" subtitle="Anagrafic List" />
        <DataTable baseId="simple-selectable-table" indeterminate>
          <TableHeader>
            <TableRow>
              <TableColumn>Name</TableColumn>
              <TableColumn>Email</TableColumn>
              <TableColumn>Address</TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.renderCustomers()}
            <TablePagination rows={rows} rowsPerPageLabel={rowsPerPageLabel} onPagination={this.handlePagination} />
          </TableBody>
        </DataTable>
      </Card>
    );
  }
}

export default createContainer(() => {
  return {
    customers: Customers.find({}).fetch(),
  };
}, CustomersList);