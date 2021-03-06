import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import CachowContext from '../../CachowContext';
import PropTypes from 'prop-types';

export default class RegistrationForm extends Component {
  static contextType = CachowContext;
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = {
    error: null,
    uType: ''
  }

  updateRadio = (event) => {
    this.props.handleUserChoice(event.target.value);
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, user_name, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value.toLowerCase().trim(),
      password: password.value,
      full_name: full_name.value,
    })
      .then(user => {
        full_name.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <legend className="formTitle">Register</legend>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='fullName'>
          <label htmlFor='fullNameInput'>
            Full name <span className="required">*</span>
          </label>
          <input
            name='full_name'
            type='text'
            required
            id='fullNameInput'>
          </input>
        </div>
        <div className='user_name'>
          <label htmlFor='userNameInput'>
            User name <span className="required">*</span>
          </label>
          <input
            name='user_name'
            type='text'
            required
            id='userNameInput'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='passwordInput'>
            Password <span className="required">*</span>
          </label>
          <input
            name='password'
            type='password'
            required
            id='passwordInput'>
          </input>
        </div>
        <div>
          <div className="buttonBox">
            <button type='submit' className="borderButton">
              Register
            </button>
          </div>
        </div>
      </form>
    )
  }
}

RegistrationForm.propTypes = {
  onRegistrationSuccess: PropTypes.func,
  error: PropTypes.object,
}