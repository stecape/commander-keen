import React, { PureComponent  } from 'react';
import TextField from 'react-md/lib/TextFields';
import FontIcon from 'react-md/lib/FontIcons';


export default class Filter extends PureComponent  {
  constructor(props){
    super(props);
  }

  promptChange = (testo, e) => {
    this.props.TEST(testo)
  }
  render() {
    return (
        <TextField
          id={`customer-filter`}
          name={`customer-filter`}
          leftIcon={<FontIcon>filter_list</FontIcon>}
          type="text"
          placeholder="Filter customers"
          onChange={(testo, e) => this.promptChange(testo, e)}
          className="md-cell--12 md-cell--bottom"
        />
    )
  }
}