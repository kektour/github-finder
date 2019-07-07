import React from 'react';
import PropTypes from 'prop-types';

function Havbar({ title, icon }) {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
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
