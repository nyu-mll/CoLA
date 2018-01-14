import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const getMenuItems = (props) => {
  let menuItems = [];
  if (!props.models || !props.models.length) {
    return [];
  }
  for(let i = 0; i < props.models.length; i++) {
    const model = props.models[i];
    menuItems.push(<MenuItem key={i} value={model} primaryText={model}/>);
  }

  return menuItems;
}

const SentenceForm = (props) => {
  return (<div>
            <TextField
             value={props.textValue}
             multiLine={true}
             fullWidth={true}
             hintText="Enter your sentence here"
             name="text"
             onChange={(e, newValue) => {
                        props.handleTextChange(e, newValue)
                      }}/>
            <SelectField
             floatingLabelText="Select a model"
             value={props.modelName}
             onChange={(e, newValue) => {
               props.handleModelChange(e, newValue);
             }}
             style={{textAlign: 'left'}}
            >
              {getMenuItems(props)}
            </SelectField>
          </div>
          );
};

export default SentenceForm;
