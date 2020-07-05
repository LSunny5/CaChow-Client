import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import '../../components/LoginForm/LoginForm.css';

class LoginPage extends React.Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }

    render() {
        return (
            <section className='formPage'>
                <button
                    className="backButton"
                    onClick={() => this.props.history.goBack()}>
                    <img src="/images/backarrow.png" alt="Go back" className="backArrow" />
                    Back
                </button>
                <h2 className="formTitle">Login</h2>
                <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
            </section>
        )
    }
}

export default LoginPage;