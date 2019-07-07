import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  static propTypes = { searchUsers: PropTypes.func.isRequired };

  state = {
    text: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;

    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={text}
            onChange={this.handleChange}
          />
          <input
            className='btn btn-dark btn-block'
            type='submit'
            value='Search'
          />
        </form>
      </div>
    );
  }
}

export default Search;
