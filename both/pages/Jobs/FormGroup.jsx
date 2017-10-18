import React, { PureComponent } from 'react';
import TextField from 'react-md/lib/TextFields';
import { Autocomplete, SelectField } from 'react-md'; 
import { Mongo } from 'meteor/mongo';

export default class FormGroup extends PureComponent {

  constructor(props){
    super(props)
  }  



  render() {
    data = this.props.customers.map((customer) => {return { label: customer.name, value: customer._id.toString() }} )
    console.log(data)
    return (
      <section className="md-grid--40-16" aria-labelledby={`addJob-title`}>
        <h2 id={`addJob-title`} className="md-cell md-cell--12">
          {`Add Job`}
        </h2>
        <input type="hidden" id="_id" name="_id" value={this.props._id} />
        <Autocomplete
          id          = {`customer-id`}
          name        = {`customer-id`}
          label       = "Customer Name"
          customSize  = "title"
          defaultValue= ""
          placeholder = "Customer Name"
          className   = "md-cell--12"
          data        = {data}
          dataLabel   = 'label'
          dataValue   = 'value'
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