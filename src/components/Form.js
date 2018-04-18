import SubmissionForm from './SubmissionForm';
import SentenceForm from './SentenceForm';

import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  state = {
    text: '',
    modelName: 1,
    models: [],
    ready: false
  }

  componentDidMount = () => {
    axios.get('/test/models', {crossDomain: true}).then((response) => {
      this.setState({
        models: response.data,
        modelName: response.data[0]
      });
    }, (response) => {

    });
  }

  handleClear = () => {
    this.setState({text: ''});
  }

  handleTextChange = (e, newValue) => {
    this.setState({text: newValue});
  }

  handleModelChange = (e, newValue) => {
    this.setState({modelName: this.state.models[newValue]})
  }

  render = () => {

    if (this.state.ready) {
        return (
          <div>
          <SentenceForm handleTextChange={this.handleTextChange}
                        textValue={this.state.text}
                        modelName={this.state.modelName}
                        models={this.state.models}
                        handleModelChange={this.handleModelChange}/>
          <SubmissionForm handleClear={this.handleClear}/>
        </div>
      );
    } else {
      return (
        <div>Demo is cooking, come back later</div>
      );
    }
  }
}

export default Form;
