import React, { Component } from 'react';
import RegistrationForm from '../../components/Register/Register';
import '../../components/Register/Register.css';
import PropTypes from 'prop-types';

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess = user => {
    alert('Registration Success!');
    const { history } = this.props;
    history.push('/login');
  }

  render() {
    return (
      <section className='formPage registerPage'>
        <button
          className="backButton"
          onClick={() => this.props.history.goBack()}>
          <img src="/images/backarrow.png" alt="Go back" className="backArrow" />
            Back
        </button>
        <RegistrationForm
          handleUserChoice={this.handleUserChoice}
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    )
  }
}

RegistrationPage.propTypes = {
  history: PropTypes.object,
}