import React, { Component } from 'react';
import Havbar from './components/layout/Havbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Havbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
