import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Havbar({ title, icon }) {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}

Havbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
};

Havbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

export default Havbar;
