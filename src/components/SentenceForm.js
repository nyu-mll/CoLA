import React from 'react';
import TextField from 'material-ui/TextField';

const SentenceForm = (props) => {
  return (<TextField
           value={props.textValue}
           hintText="Enter your sentence here"
           onChange={(e, newValue) => {
                      props.handleTextChange(e, newValue)
                    }}/>);
};

export default SentenceForm;
