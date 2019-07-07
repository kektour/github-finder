import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReduser';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';

function GithubState(props) {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };
  const [state, dispath] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async text => {
    setLoading(true);
    const res = await axios.get('https://api.github.com/search/users', {
      params: {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRETS,
        q: text
      }
    });
    dispath({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };
  // Get User

  // Get Repos

  // Clear Users

  // Set Loading
  const setLoading = () => {
    dispath({ type: SET_LOADING });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
}

export default GithubState;
