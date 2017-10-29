import React, { PureComponent } from 'react';
import TextField from 'react-md/lib/TextFields';
import { Autocomplete } from 'react-md';
import { SelectField } from 'react-md';
import { Mongo } from 'meteor/mongo';
import ColorPicker from '../../components/ColorPicker/ColorPicker';

export default class FormGroup extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      customerDefaultName: this.props.customer_id ? this.props.customers.filter((customer) => customer._id._str == this.props.customer_id._str)[0].name : "",
      value:               this.props.customer_id._str,
      customerNameError:   this.props.customerNameError,
      _id:                 this.props._id,
      customer_id:         this.props.customer_id,
      description:         this.props.description,
      address:             this.props.address,
      status:              this.props.status,
      color:               this.props.color ? this.props.color : '#3366CC'
    }
  }  

  componentWillReceiveProps(nextProps) {
    if (nextProps.customerNameError !== this.state.customerNameError) {
      this.setState({ customerNameError: nextProps.customerNameError });
    }
  }

  componentDidUpdate() {
    let values = {
      _id:                 this.state._id,
      customer_id:         this.state.customer_id,
      description:         this.state.description,
      address:             this.state.address,
      status:              this.state.status,
      color:               this.state.color
    }
    this.props.getValues(values)
  }

  setCustomer    = (customer_id)=> this.setState ( { customer_id: customer_id, value: customer_id._str, customerNameError: false } )
  setDescription = (description)=> this.setState ( { description: description } )
  setAddress     = (address)    => this.setState ( { address    : address     } )
  setStatus      = (status)     => this.setState ( { status     : status      } )
  setColor       = (color)      => this.setState ( { color      : color       } )

  render() {
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
          data          = {this.props.customers.map((customer) => {return { label: customer.name, value: customer._id }} )}
          dataLabel     = 'label'
          dataValue     = 'value'
          filter        = {Autocomplete.caseInsensitiveFilter}
          onAutocomplete= {this.setCustomer}
        />
        <TextField
          id            = "customer_id"
          name          = "customer_id"
          label         = "Customer Id"
          placeholder   = "Customer Id"
          className     = "md-cell md-cell--top"
          defaultValue  = {this.state.value}
          value         = {this.state.value}
          disabled
          error         = {this.state.customerNameError}
          errorText     = "Select a customer."
        />
        <TextField
          id            = {`description`}
          name          = {`description`}
          type          = "text"
          label         = "Job Description"
          defaultValue  = {this.props.description}
          placeholder   = "Short description"
          className     = "md-cell--12 md-cell--bottom"
          onChange      = {this.setDescription}
        />
        <TextField
          id            = {`address`}
          name          = {`address`}
          type          = "text"
          label         = "Address"
          defaultValue  = {this.props.address}
          placeholder   = "Enter Address"
          className     = "md-cell--12 md-cell--bottom"
          onChange      = {this.setAddress}
        />
        <SelectField
          id            = {`status`}
          placeholder   = {`status`}
          defaultValue  = {this.props.status}
          menuItems     = {['not started', 'finished', 'in progress']}
          className     = "md-cell--12 md-cell--bottom"
          onChange      = {this.setStatus}
        />
        <ColorPicker 
          title         = "Color"
          defaultColor  = {this.state.color}
          onChange      = {this.setColor}
        />
      </section>
    );
  }
}