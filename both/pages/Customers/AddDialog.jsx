import React, { PureComponent } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Button from 'react-md/lib/Buttons/Button';
import DialogContainer from 'react-md/lib/Dialogs';
import Toolbar from 'react-md/lib/Toolbars';

import FormGroup from './FormGroup';

export default class AddDialog extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      _id     : this.props._id,
      name    : this.props.name,
      email   : this.props.email,
      address : this.props.address,
      color   : this.props.color
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state);
  } 

  updateState = (values) => { this.setState (values) }

  render() {
    return (
      <DialogContainer
        id                      = "add-customers-dialog"
        aria-labelledby         = "add-customers-dialog-title"
        visible                 = {this.props.visible}
        onHide                  = {this.props.onHide}
        fullPage
      >
        <CSSTransitionGroup
          id                    = "add-customers-form"
          component             = "form"
          onSubmit              = {this.handleSubmit}
          className             = "md-text-container md-toolbar--relative"
          transitionName        = "md-cross-fade"
          transitionEnterTimeout= {300}
          transitionLeave       = {false}
        >
          <Toolbar
            nav                 = {<Button name="button" icon onClick={this.props.onHide}>arrow_back</Button>}
            title               = "Add a new Customer"
            titleId             = "add-customers-dialog-title"
            fixed
            colored
            actions             = {<Button name="button" type="submit" flat>Submit</Button>}
          />
          <FormGroup
            _id                 = {this.props._id}
            name                = {this.props.name}
            email               = {this.props.email}
            address             = {this.props.address}
            color               = {this.props.color}
            getValues           = {this.updateState}
          />
        </CSSTransitionGroup>
      </DialogContainer>
    );
  }
}