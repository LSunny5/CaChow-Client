import React from 'react';
import './Landing.css';
import { NavLink } from 'react-router-dom';

class LandingPage extends React.Component {
    render() {
        return (
            <section className="LandingContent">
                <div className="LandingTop">
                    <img src="images/LogoResized.png" className="LandingImage" alt="Cachow Logo" />
                    <h1 className="LandingHeading">CaChow!</h1>
                </div>
                <div className="LandingBottom" onSubmit={this.handleSubmit}>
                    <div className="LandingDescription">
                        Welcome to the site that keeps all your menus in one place!
                        Instead of having to navigate to several different websites to view menus
                        and restaurant information, keep all your menus in one place!
                    </div>

                    <div className="ButtonTextBox">
                        <div className="ButtonText">Let's Begin</div>
                        <div className="ButtonWrapper">
                            <div className="ButtonArrow"></div>
                            <NavLink to='/login'>
                                <div className="ButtonCircleBorder"></div>

                                <div className="ButtonCircleCover">
                                    <div className="SmallCircle"></div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LandingPage;