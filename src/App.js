import React, { Component } from 'react';
import Havbar from './components/layout/Havbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users', {
      params: {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRETS
      }
    });
    this.setState({
      users: res.data,
      loading: false
    });
  }

  // Search Github users
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/search/users', {
      params: {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRETS,
        q: text
      }
    });
    this.setState({
      users: res.data.items,
      loading: false
    });
  };

  // Clear users from state
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    });
  };

  render() {
    const { loading, users } = this.state;

    return (
      <div className='App'>
        <Havbar />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
