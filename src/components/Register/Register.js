import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import CachowContext from '../../CachowContext';

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
      user_name: user_name.value.trim(),
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

    /* AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        console.log('here')
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken)
        //this.props.onLoginSuccess();
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      }) */
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
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

       {/*  <p>User Type</p>
        <div className='userType'>
          <label htmlFor='ownerType'>
            <input type="radio"
              name='userSelect'
              value="Owner"
              defaultChecked
              id='ownerType'
              required
              onChange={this.updateRadio} />
          Restaurant Owner
          </label>
          <label htmlFor='regularType'>
            <input type="radio"
              name='userSelect'
              value="User"
              id='regularType'
              required
              onChange={this.updateRadio} />
          General User
          </label>
        </div> */}
        
        <button type='submit' className="registerButton">
          Register
        </button>
      </form>
    )
  }
}
