import React from 'react';
import './Landing.css';
import { NavLink } from 'react-router-dom';

class LandingPage extends React.Component {
    render() {
        return (
            <section className="LandingContent">
                <h1 className="LandingHeading">CaChow!</h1>
                <div className="LandingDescription">
                    Welcome to the site that keeps all your menus in one place!
                    Instead of having to navigate to several different websites to view their menus, this site
                    allows you to click and see the restaurant's information and menu!
                    <br />
                    <br />
                </div>
                <form className="LandingForm" onSubmit={this.handleSubmit}>
                    <NavLink to='/login' className="beginButton" >Let's Begin</NavLink>
                </form>
            </section>
        );
    }
}

export default LandingPage;