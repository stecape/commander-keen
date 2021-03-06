import React, { PureComponent  } from 'react';
import TextField from 'react-md/lib/TextFields';
import FontIcon from 'react-md/lib/FontIcons';


export default class Filter extends PureComponent  {
  constructor(props){
    super(props);
  }

  promptChange = (testo, e) => {
    this.props.filtr(testo)
  }
  render() {
    return (
        <TextField
          id={`job-filter`}
          name={`job-filter`}
          leftIcon={<FontIcon>filter_list</FontIcon>}
          type="text"
          placeholder="Filter jobs"
          onChange={(testo, e) => this.promptChange(testo, e)}
          className="md-cell--12 md-cell--bottom"
        />
    )
  }
}