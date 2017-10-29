import React, { PureComponent } from 'react';
import ColorList from './ColorList';

export default class ColorPicker extends PureComponent {

  constructor(props){
    super(props)
  }

  check = (e) => {
    this.props.onChange(e.target.value)
  }

  renderColors = () => {
    return ColorList.map( color => {
      let style   = { backgroundColor: color }
      let checked = this.props.defaultColor == color ? true : false
      return (
        <label key={color} className="cp-container">
          <input type="radio" name="radio" defaultChecked={checked} value={color} onChange={this.check}/>
          <span className="cp-checkmark" style={style}></span>
        </label>
      )
    })
  }

  render() {
    return (
      <div className="cp-box">
        <h5>{this.props.title}</h5>
        <div className="cp-flex-container">
          {this.renderColors()}
        </div>
      </div>
    )
  }
}