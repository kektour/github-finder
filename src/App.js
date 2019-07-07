import React, { Component } from 'react';
import Havbar from './components/layout/Havbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Havbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
