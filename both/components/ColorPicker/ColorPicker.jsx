import React, { PureComponent } from 'react';

//array contenente i colori
import ColorList from './ColorList';

export default class ColorPicker extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      title:              this.props.title,
      defaultColor:       this.props.defaultColor ? this.props.defaultColor : '#3366CC'
    }
  }

  //questa funzione viene chiamata quando si cambia colore. Esegue la funzione che gli viene
  //passata nelle props. La funzione ha come contesto di esecuzione il parent stesso.
  check = (e) => {
    this.props.onChange(e.target.value)
  }

  //questa funzione di lifecycle dello state è necessaria per aggiornare lo state quando cambiano
  //le props. Non so bene perchè. Mi serve perchè quando seleziono un cliente nel parent component
  //cambio state.defaultColor. Il cambiamento voglio che si propaghi al color picker in modo che 
  //il nuovo lavoro assuma il colore del cliente e il color picker si allinei.
  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultColor !== this.props.defaultColor) {
      this.setState({ defaultColor: nextProps.defaultColor });
    }
  }

  renderColors = (defaultColor) => {
    console.log(defaultColor)
    return ColorList.map( color => {
      let style   = { backgroundColor: color }
      let checked = defaultColor == color ? true : false
      return (
        <label key={color} className="cp-container">
          <input type="radio" name="radio" checked={checked} value={color} onChange={this.check}/>
          <span className="cp-checkmark" style={style}></span>
        </label>
      )
    })
  }

  render() {
    return (
      <div className="cp-box">
        <h5>{this.state.title}</h5>
        <div className="cp-flex-container">
          {this.renderColors(this.state.defaultColor)}
        </div>
      </div>
    )
  }
}