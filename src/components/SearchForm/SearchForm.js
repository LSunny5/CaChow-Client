import React from 'react';
import './SearchForm.css';
import { NavLink } from 'react-router-dom';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
        }
    }

    //update the text value in the search field
    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }

    //send search word to search page
    sendSearch = () => {
        this.props.getSearchValue(this.state.searh);
    }

    render() {
        return (
                <form>
                    <label htmlFor="searchBar">
                        <input type="text"
                            id="searchBar"
                            value={this.state.search}
                            placeholder=" Restaurant name, city, state, etc... "
                            name="searchBar"
                            className="searchText"
                            autoComplete="off"
                            onChange={this.updateSearch.bind(this)} >
                        </input>
                        <NavLink to='/search' className="searchButton" >
                            <img src="/images/magnifying.png" alt="Search button icon" className="searchImage"></img>
                        </NavLink>
                    </label>
                </form>
        );
    }
}

export default SearchForm;