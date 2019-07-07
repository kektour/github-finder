import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.text);
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
