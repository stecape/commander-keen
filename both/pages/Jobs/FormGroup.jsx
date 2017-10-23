import React, { PureComponent } from 'react';
import TextField from 'react-md/lib/TextFields';
import { Autocomplete } from 'react-md';
import { SelectField } from 'react-md';
import { Mongo } from 'meteor/mongo';

export default class FormGroup extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      customerDefaultName: this.props.customer_id ? this.props.customers.filter((customer) => customer._id._str == this.props.customer_id._str)[0].name : "",
      value: this.props.customer_id._str,
      customerNameError: this.props.customerNameError
    }
  }  

  componentWillReceiveProps(nextProps) {
    if (nextProps.customerNameError !== this.state.customerNameError) {
      this.setState({ customerNameError: nextProps.customerNameError });
    }
  }

  selectCustomer = (value) => this.setState ( {value: value, customerNameError: false } )

  render() {
    data = this.props.customers.map((customer) => {return { label: customer.name, value: customer._id._str }} )

    return (

      <section className="md-grid--40-16" aria-labelledby={`addJob-title`}>
        <h2 id={`addJob-title`} className="md-cell md-cell--12">
          {`Add Job`}
        </h2>
        <input type="hidden" id="_id" name="_id" value={this.props._id} />
        <Autocomplete
          id            = {`customer-list`}
          name          = {`customer-list`}
          filter        = {null}
          label         = "Customer Name"
          customSize    = "title"
          defaultValue  = {this.state.customerDefaultName}
          placeholder   = "Customer Name"
          className     = "md-cell--12"
          data          = {this.props.customers.map((customer) => {return { label: customer.name, value: customer._id._str }} )}
          dataLabel     = 'label'
          dataValue     = 'value'
          filter        = {Autocomplete.caseInsensitiveFilter}
          onAutocomplete= {this.selectCustomer}
        />
        <TextField
          id="customer_id"
          name="customer_id"
          label="Customer Id"
          placeholder="Customer Id"
          className="md-cell md-cell--top"
          defaultValue={this.state.value}
          value={this.state.value}
          disabled
          error={this.state.customerNameError}
          errorText="Select a customer."
        />
        <TextField
          id          = {`description`}
          name        = {`description`}
          type        = "text"
          label       = "Job Description"
          defaultValue= {this.props.description}
          placeholder = "Short description"
          className   = "md-cell--12 md-cell--bottom"
        />
        <TextField
          id          = {`address`}
          name        = {`address`}
          type        = "text"
          label       = "Address"
          defaultValue= {this.props.address}
          placeholder = "Enter Address"
          className   = "md-cell--12 md-cell--bottom"
        />
        <SelectField
          id          = {`status`}
          placeholder = {`status`}
          defaultValue= {this.props.status}
          menuItems   = {['not started', 'finished', 'in progress']}
          className   = "md-cell--12 md-cell--bottom"
        />
      </section>
    );
  }
}