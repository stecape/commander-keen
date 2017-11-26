import React, { PureComponent } from 'react';
import TextField from 'react-md/lib/TextFields';
import ColorPicker from '../../components/ColorPicker/ColorPicker';

export default class FormGroup extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      _id:                 this.props._id,
      name:                this.props.name,
      email:               this.props.email,
      address:             this.props.address,
      color:               this.props.color ? this.props.color : '#3366CC'
    }
  }  

  componentDidUpdate() {
    let values = {
      _id:                 this.state._id,
      name:                this.state.name,
      email:               this.state.email,
      address:             this.state.address,
      color:               this.state.color
    }
    this.props.getValues(values)
  }

  setName        = (name)       => this.setState ( { name       : name        } )
  setEmail       = (email)      => this.setState ( { email      : email       } )
  setAddress     = (address)    => this.setState ( { address    : address     } )
  setColor       = (color)      => this.setState ( { color      : color       } )



  render() {
    return (

      <section className="md-grid--40-16" aria-labelledby={`addCustomer-title`}>
        <h2 id={`addCustomer-title`} className="md-cell md-cell--12">
          {`Add Customer`}
        </h2>
        <input type="hidden" name="_id" value={this.props._id} />
        <TextField
          id           = {`name`}
          name         = {`name`}
          label        = "Customer"
          customSize   = "title"
          defaultValue = {this.props.name}
          placeholder  = "Name"
          className    = "md-cell--12"
          onChange      = {this.setName}
        />
        <TextField
          id           = {`email`}
          name         = {`email`}
          type         = "email"
          label        = "Email"
          defaultValue = {this.props.email}
          placeholder  = "name.surname@email.com"
          className    = "md-cell--12 md-cell--bottom"
          onChange      = {this.setEmail}
        />
        <TextField
          id           = {`address`}
          name         = {`address`}
          type         = "text"
          label        = "Address"
          defaultValue = {this.props.address}
          placeholder  = "Enter Address"
          className    = "md-cell--12 md-cell--bottom"
          onChange      = {this.setAddress}
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