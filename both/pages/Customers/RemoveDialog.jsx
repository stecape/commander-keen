import React, { PureComponent } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import DialogContainer from 'react-md/lib/Dialogs';

export default class RemoveDialog extends PureComponent {

  constructor(props){
    super(props);
  }

  render() {
    const actions = [];
    actions.push({ children: 'CANCEL', onClick: this.props.onHide });
    actions.push(<Button flat secondary onClick={this.props.onRemove}>DELETE</Button>);

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