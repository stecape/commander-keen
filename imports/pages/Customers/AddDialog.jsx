import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Button from 'react-md/lib/Buttons/Button';
import DialogContainer from 'react-md/lib/Dialogs';
import Toolbar from 'react-md/lib/Toolbars';

import FormGroup from './FormGroup';

export default class AddDialog extends PureComponent {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCustomer(e);
  };

  render() {
    return (
      <DialogContainer
        id="add-desserts-dialog"
        aria-labelledby="add-desserts-dialog-title"
        visible={this.props.visible}
        onHide={this.props.onHide}
        fullPage
      >
        <CSSTransitionGroup
          id="add-dessert-form"
          component="form"
          onSubmit={this.handleSubmit}
          className="md-text-container md-toolbar--relative"
          transitionName="md-cross-fade"
          transitionEnterTimeout={300}
          transitionLeave={false}
        >
          <Toolbar
            nav={<Button icon onClick={this.props.onHide}>arrow_back</Button>}
            title="Add a new Customer"
            titleId="add-desserts-dialog-title"
            fixed
            colored
            actions={<Button type="submit" flat>Submit</Button>}
          />
          <FormGroup/>
        </CSSTransitionGroup>
      </DialogContainer>
    );
  }
}