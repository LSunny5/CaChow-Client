import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import '../../components/LoginForm/LoginForm.css';
import PropTypes from 'prop-types';

class LoginPage extends React.Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || '/search';
        history.push(destination);
    }

    render() {
        return (
            <section className='formPage lForm'>
                <button
                    className="backButton"
                    onClick={() => this.props.history.goBack()}>
                    <img src="/images/backarrow.png" alt="Go back" className="backArrow" />
                    Back
                </button>
                <h2 className="formTitle">Login</h2>
                <LoginForm onLoginSuccess={this.handleLoginSuccess} />
                <p className="demoInstructions">
                    <span className="makeBold">For Demo Version: </span>
                    <br />
                    Username: Guest
                    <br />
                    Password: Demo2020!
                </p>
            </section>
        )
    }
}

LoginPage.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
};

export default LoginPage;