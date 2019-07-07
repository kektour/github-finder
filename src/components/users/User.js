import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

class User extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      user: {
        name,
        avatar_url,
        location,
        bio,
        company,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
      },
      loading
    } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              className='round-img'
              style={{ width: '150px' }}
              src={avatar_url}
              alt=''
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            )}
            <a className='btn btn-dark my-1' href={html_url}>
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <>
                    <strong>Username: </strong> {login}
                  </>
                )}
              </li>
              <li>
                {company && (
                  <>
                    <strong>Company: </strong> {company}
                  </>
                )}
              </li>
              <li>
                {blog && (
                  <>
                    <strong>Website: </strong> {blog}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-light'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
      </>
    );
  }
}

export default User;