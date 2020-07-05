import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <nav role="navigation" className="navBar">
                <button
                    className="backButton"
                    onClick={() => this.props.history.goBack()}>
                    <img src="/images/backarrow.png" alt="Go back" className="backArrow" />
                    Back
                </button>
                <NavLink
                    className="loginLink"
                    to={`/login`}>
                    Login
                </NavLink>
            </nav>
        );
    }
}

export default NavBar;