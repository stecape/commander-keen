import React, { PureComponent } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import DialogContainer from 'react-md/lib/Dialogs';

export default class RemoveDialog extends PureComponent {

  constructor(props){
    super(props);
  }

  render() {
    let customers = []
    customers.push ( this.props.customers.map ( customer => 
      { return { key: customer._id, val: this.props.jobs.filter(job => job.customer_id == customer._id) } }
    ) )

    console.log(customers)

    const actions = [];
    actions.push({ children: 'CANCEL', onClick: this.props.onHide });
    //Questo se posso cancellare
    //actions.push(<Button flat secondary onClick={this.props.onRemove(this.customers)}>DELETE</Button>);
    //Qui ne metto un altro che sia disabilitato. 
    //Deve apparire se non posso cancellare la voce perchè ha delle dipendenze.

    return (
      <DialogContainer
        id="remove-dialog"
        aria-labelledby="remove-dialog-title"
        visible={this.props.visible}
        onHide={this.props.onHide}
        title="Are you sure about removing selected customers?"
        actions={actions}
      />
    );
  }
}