import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'

import Counter from './containers/Counter/Counter';
import PersonController from './containers/Person/PersonController';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="d1">
        <Toolbar/>
       </div>
       <div className="d2">
       <Counter />
       </div>
       <div className="d3">
         <PersonController/>
       </div>
      </div>
    );
  }
}

export default App;
