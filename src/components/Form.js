import SubmissionForm from './SubmissionForm';
import SentenceForm from './SentenceForm';

import React from 'react';

class Form extends React.Component {
  state = {
    text: ''
  }

  handleClear = () => {
    this.setState({text: ''});
  }

  handleTextChange = (e, newValue) => {
    this.setState({text: newValue});
  }

  render = () => {
    return (
      <div>
        <SentenceForm handleTextChange={this.handleTextChange} textValue={this.state.text}/>
        <SubmissionForm handleClear={this.handleClear}/>
      </div>
    )
  }
}

export default Form;
