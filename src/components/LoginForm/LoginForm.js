import React, { Component } from 'react'
//import AuthApiService from '../../services/auth-api-service'
import './LoginForm.css';
import { NavLink } from 'react-router-dom';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();

    this.props.onLoginSuccess();
    /* this.setState({ error: null })
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      }) */
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <legend className="loginDirect">Please enter your username and password. </legend>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='loginUserName'>
            User name <span className = "required">*</span>
          </label>
          <input
            required
            name='user_name'
            id='loginUserName'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='loginPassword'>
            Password <span className = "required">*</span>
          </label>
          <input
            required
            name='password'
            type='password'
            id='loginPassword'>
          </input>
        </div>
        <button type='submit' className="loginButton">
          Login
        </button>
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