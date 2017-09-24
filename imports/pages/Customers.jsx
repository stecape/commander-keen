import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Customers } from '../api/customers.js';



class CustomersList extends Component {
  renderCustomers() {
    return this.props.customers.map((customer) => (
      <li key={customer._id}>{customer.name}, {customer.createdAt.toLocaleTimeString()} </li>
    ));
  }
  render() {
    return (
      <div className="container">
        <header>
          <h1>Customer List</h1>
        </header>
         <ul>
          {this.renderCustomers()}
        </ul>
      </div>
    );
  }
}

Customers.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    customers: Customers.find({}).fetch(),
  };
}, CustomersList);