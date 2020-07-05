import React from 'react';
import './Landing.css';
import SearchForm from '../SearchForm/SearchForm';
import { NavLink } from 'react-router-dom';

class LandingPage extends React.Component {
    render() {
        return (
            <section className="LandingContent">
                <NavLink to= "/login" className="loginLink">Login</NavLink>
                <h1 className="LandingHeading">CaChow!</h1>
                <div className="LandingDescription">
                    Welcome to the site that keeps all your menus in one place!
                    Instead of having to navigate to several different websites to view their menus, this site
                    allows you to click and see the restaurant's information and menu!
                    <br />
                    <br />
                    To get started, enter restaurant name, city, state, or food and search.
                </div>
                <div className="SearchContent">
                    <SearchForm />
                </div>
            </section>
        );
    }
}

export default LandingPage;
