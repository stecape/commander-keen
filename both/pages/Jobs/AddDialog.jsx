import React, { PureComponent } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Button from 'react-md/lib/Buttons/Button';
import DialogContainer from 'react-md/lib/Dialogs';
import Toolbar from 'react-md/lib/Toolbars';

import FormGroup from './FormGroup';

export default class AddDialog extends PureComponent {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(e);
  }

  render() {
    return (
      <DialogContainer
        id="add-jobs-dialog"
        aria-labelledby="add-jobs-dialog-title"
        visible={this.props.visible}
        onHide={this.props.onHide}
        fullPage
      >
        <CSSTransitionGroup
          id="add-jobs-form"
          component="form"
          onSubmit={this.handleSubmit}
          className="md-text-container md-toolbar--relative"
          transitionName="md-cross-fade"
          transitionEnterTimeout={300}
          transitionLeave={false}
        >
          <Toolbar
            nav={<Button name="button" icon onClick={this.props.onHide}>arrow_back</Button>}
            title="Add a new Job"
            titleId="add-jobs-dialog-title"
            fixed
            colored
            actions={<Button name="button" type="submit" flat>Submit</Button>}
          />
          <FormGroup
            _id         = {this.props._id}
            customer_id = {this.props.customer_id}
            description = {this.props.description}
            address     = {this.props.address}
            customers   = {this.props.customers}
          />
        </CSSTransitionGroup>
      </DialogContainer>
    );
  }
}