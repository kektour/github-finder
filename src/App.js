import React, { Component } from 'react';
import Havbar from './components/layout/Havbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Havbar />
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default App;
