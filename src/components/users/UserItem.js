import React from 'react';
import PropTypes from 'prop-types';

function UserItem({ user: { avatar_url, login, html_url } }) {
  return (
    <div className='card text-center'>
      <img
        className='round-img'
        style={{ width: '60px' }}
        src={avatar_url}
        alt=''
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired
  }).isRequired
};

export default UserItem;
