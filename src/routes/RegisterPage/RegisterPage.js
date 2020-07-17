import React, { Component } from 'react';
import RegistrationForm from '../../components/Register/Register';
import '../../components/Register/Register.css';

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  constructor() {
    super();
    this.state = {
      radioChoice: 'Owner',
    }
  }

  handleUserChoice = (choice) => {
    this.setState({ radioChoice: choice });
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props

    if (this.state.radioChoice === "Owner") {
      history.push('/addRestaurant')
    } else {
      history.push('/login')
    }
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