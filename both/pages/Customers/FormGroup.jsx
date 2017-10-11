import React, { PureComponent } from 'react';
import TextField from 'react-md/lib/TextFields';

export default class FormGroup extends PureComponent {

  constructor(props){
    super(props);
    this.state = {};
  }  

  componentWillMount() {
    this.setState({
      name: '',
      email: '',
      address: '',
    });
  }

  render() {

    return (
      <section className="md-grid--40-16" aria-labelledby={`addCustomer-title`}>
        <h2 id={`addCustomer-title`} className="md-cell md-cell--12">
          {`Add Customer`}
        </h2>
        <TextField
          id={`customer-name`}
          name={`name`}
          label="Customer"
          customSize="title"
          defaultValue=""
          placeholder="Name"
          className="md-cell--12"
        />
        <TextField
          id={`customer-email`}
          name={`email`}
          type="email"
          label="Email"
          defaultValue=""
          placeholder="name.surname@email.com"
          className="md-cell--12 md-cell--bottom"
        />
        <TextField
          id={`customer-address`}
          name={`address`}
          type="text"
          label="Address"
          defaultValue=""
          placeholder="Enter Address"
          className="md-cell--12 md-cell--bottom"
        />
      </section>
    );
  }
}