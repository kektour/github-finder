import React, { Component } from 'react';
import Havbar from './components/layout/Havbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({
      users: res.data,
      loading: false
    });
  }

  render() {
    const { loading, users } = this.state;

    return (
      <div className='App'>
        <Havbar />
        <div className='container'>
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
