import React, { PureComponent } from 'react';
import TextField from 'react-md/lib/TextFields';
import { Autocomplete, SelectField } from 'react-md'; 

export default class FormGroup extends PureComponent {

  constructor(props){
    super(props)
  }  

  data = this.props.customers.map((customer) => {return { dataValue: customer._id.toString(), dataLabel: customer.name }} )
  defVal = this.props.customers.filter((customer) => {customer._id == this.props.customer_id})
  
  defVal = defVal[0].name

  render() {
    console.log(this.data, this.defVal)
    return (
      <section className="md-grid--40-16" aria-labelledby={`addCustomer-title`}>
        <h2 id={`addCustomer-title`} className="md-cell md-cell--12">
          {`Add Job`}
        </h2>
        <input type="hidden" name="_id" value={this.props._id} />
        <Autocomplete
          id          = {`customer-name`}
          name        = {`name`}
          label       = "Customer Name"
          customSize  = "title"
          defaultValue= {this.defVal}
          placeholder = "Customer Name"
          className   = "md-cell--12"
          data        = {this.data}
          filter      = {Autocomplete.caseInsensitiveFilter}
          autocompleteWithLabel
        />
        <TextField
          id          = {`job-description`}
          name        = {`description`}
          type        = "text"
          label       = "Job Description"
          defaultValue= {this.props.description}
          placeholder = "Short description"
          className   = "md-cell--12 md-cell--bottom"
        />
        <TextField
          id          = {`job-address`}
          name        = {`address`}
          type        = "text"
          label       = "Address"
          defaultValue= {this.props.address}
          placeholder = "Enter Address"
          className   = "md-cell--12 md-cell--bottom"
        />
        <SelectField
          id          = {`job-status`}
          placeholder = {`status`}
          menuItems   = {['not started', 'finished', 'in progress']}
          className   = "md-cell--12 md-cell--bottom"
        />
      </section>
    );
  }
}