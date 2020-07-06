import React from 'react';
import './Landing.css';
//import SearchForm from '../SearchForm/SearchForm';
import { NavLink } from 'react-router-dom';
//import SearchPage from '../../routes/SearchPage/SearchPage'

class LandingPage extends React.Component {

    /* handleSubmit = () => {
        {<SearchPage query={this.state.item}></SearchPage>}
    } */

    render() {
        return (
            <section className="LandingContent">
                <NavLink to="/login" className="loginLink">Login</NavLink>
                <h1 className="LandingHeading">CaChow!</h1>
                <div className="LandingDescription">
                    Welcome to the site that keeps all your menus in one place!
                    Instead of having to navigate to several different websites to view their menus, this site
                    allows you to click and see the restaurant's information and menu!
                    <br />
                    <br />
                    {/* To get started, enter restaurant name, city, state, or food and search. */}
                </div>
                <form className="LandingForm" onSubmit={this.handleSubmit}>


                {/* <label htmlFor="searchBar" className='labelDesign'>
                    <input type="text"
                        id="searchBar"
                        placeholder="Search..."
                        name="searchBar"
                        className="searchText"
                        autoComplete="off"
                        /* onChange={this.updateSearchTerm}  >
                    </input>
                </label> */}
                {/* <button type="submit" onClick={this.handleSubmit}>
                        <img src="/images/magnifying.png" alt="Search button icon" className="searchImage"></img>
                    </button> */}



                    {/* <SearchForm onSubmit={this.handleSubmit} />
                    <button type="submit" onClick={this.handleSubmit}>
                        <img src="/images/magnifying.png" alt="Search button icon" className="searchImage"></img>
                    </button> */}


                    <NavLink to='/search' className="searchButton" >Let's Begin
                       {/*  <img src="/images/magnifying.png" alt="Search button icon" className="searchImage"></img> */}
                    </NavLink>



                </form>

            </section>
        );
    }
}

export default LandingPage;
