import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Havbar extends Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string
  };

  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  };

  render() {
    const { title, icon } = this.props;

    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon} /> {title}
        </h1>
      </nav>
    );
  }
}

export default Havbar;
