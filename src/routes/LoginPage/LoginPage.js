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
                <LoginForm onLoginSuccess={this.handleLoginSuccess} />
                <div className="demoInstructions">
                    <p className="makeBold">For Demo Version: </p>
                    Username: Guest
                    <br />
                    Password: Demo2020!
                </div>
            </section>
        )
    }
}

LoginPage.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
};

export default LoginPage;