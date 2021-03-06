import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './LoginForm.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  state = { error: null }

  handleSubmitJwtAuth = event => {
    event.preventDefault();
    this.setState({ error: null })
    const { user_name, password } = event.target

    AuthApiService.postLogin({
      user_name: user_name.value.toLowerCase().trim(),
      password: password.value,
    })
      .then(res => {
        localStorage.setItem('name', user_name.value.toLowerCase().trim());
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    localStorage.clear();

    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <legend className="formTitle">Login</legend>
        <p className="loginDirect">Please enter your username and password. </p>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='loginUserName'>
            Username <span className="required">*</span>
          </label>
          <input
            required
            name='user_name'
            id='loginUserName'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='loginPassword'>
            Password <span className="required">*</span>
          </label>
          <input
            required
            name='password'
            type='password'
            id='loginPassword'>
          </input>
        </div>
          <div className="buttonBox">
            <button type='submit' className="borderButton">
              Log in
            </button>
          </div>
        <div className="registerQuestionBox">
          <p className="registerDesc">
            No Account? No Problem!
          </p>
          <NavLink to='/register' className="registerLink">
            Click here to Register!
          </NavLink>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func,
  error: PropTypes.object,
}