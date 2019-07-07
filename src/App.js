import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Havbar from './components/layout/Havbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='app'>
            <Havbar />
            <div className='container'>
              <Alert alert={alert} />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={() => (
                    <>
                      <Search />
                      <Users />
                    </>
                  )}
                />
                <Route exact path='/user/:login' component={User} />
                <Route exact path='/about' component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
