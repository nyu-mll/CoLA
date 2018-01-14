import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './App.css';

import {blue500} from 'material-ui/styles/colors';
import Form from './components/Form';

const styles = {
  appBar: {
    spanRight: {
      float: 'right',
      fontSize: '1em'
    },
    spanLeft: {
      float: 'left',
      fontSize: '1em'
    }
  },

  appHeader: {
    backgroundColor: blue500
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          title={<div><span style={styles.appBar.spanLeft}>NYU-ML</span><span style={styles.appBar.spanRight}>About</span></div>}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}
        />
      <header className="App-header" style={styles.appHeader}>
          <h1 className="App-title">Grammaticality Judgements</h1>
        </header>
        <div className="App-intro">
          <Form/>
        </div>
      </div>
    );
  }
}

export default App;
