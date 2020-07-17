import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';

class NavBar extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
    }

    renderSearchLink = () => {
        if (window.location.pathname !== '/search') {
            return (
                <NavLink
                    className="navLinkButton"
                    to='/search'>
                    Search
                </NavLink>
            )
        }
    }

    renderLogoutLink() {
        return (
            <div className='loginLink'>
                {this.renderSearchLink()}
                <NavLink
                    className="navLinkButton"
                    to='/account'>
                    Account
                </NavLink>
                <NavLink
                    onClick={this.handleLogoutClick}
                    className="navLinkButton"
                    to='/'>
                    Logout
                </NavLink>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='loggedOut'>
                <NavLink
                    className="loginLink"
                    to={`/login`}>
                    Log in
                </NavLink>
            </div>
        )
    }

    render() {
        return (
            <nav role="navigation" className="navBar">
                <button
                    className="backButton"
                    onClick={() => this.props.history.goBack()}>
                    <img src="/images/backarrow.png" alt="Go back" className="backArrow" />
                    Back
                </button>

                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
            </nav>
        );
    }
}

export default NavBar;