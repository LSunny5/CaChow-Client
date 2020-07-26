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

  //TODO:  Add options in future for owner page versus average user
  /* constructor() {
    super();
    this.state = {
      radioChoice: 'Owner',
    }
  } */

  /* handleUserChoice = (choice) => {
    this.setState({ radioChoice: choice });
  } */

  handleRegistrationSuccess = user => {
    alert('Registration Success!');
    const { history } = this.props;
    history.push('/login');

    /* if (this.state.radioChoice === "Owner") {
      history.push('/restaurants/add')
    } else {
      history.push('/login')
    } */
  }

  render() {
    return (
      <section className='formPage'>
        <h2 className="formTitle">Register</h2>
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