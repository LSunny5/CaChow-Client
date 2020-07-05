import React, { Component } from 'react'
//import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault();

    this.props.onRegistrationSuccess()
    /* ev.preventDefault()
    const { full_name, nick_name, user_name, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
      nickname: nick_name.value,
    })
      .then(user => {

        full_name.value = ''
        nick_name.value = ''
        user_name.value = ''
        password.value = ''
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
            Full name <span className = "required">*</span>
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
            User name <span className = "required">*</span>
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
            Password <span className = "required">*</span>
          </label>
          <input
            name='password'
            type='password'
            required
            id='passwordInput'>
          </input>
        </div>
        <div className='nick_name'>
          <label htmlFor='nicknameInput'>
            Nickname
          </label>
          <input
            name='nick_name'
            type='text'
            required
            id='nicknameInput'>
          </input>
        </div>
        <button type='submit' className="registerButton">
          Register
        </button>
      </form>
    )
  }
}