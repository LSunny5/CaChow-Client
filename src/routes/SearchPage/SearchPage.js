import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import CachowContext from '../../CachowContext';
import { NavLink } from 'react-router-dom';
import '../../components/SearchForm/Search.css';


export default class SearchPage extends Component {
    static contextType = CachowContext;
    constructor() {
        super();
        this.state = {
            query: '',
        }
    }

    //update the text value in the search field
    updateSearch = (value) => {
        this.setState({ query: value });
    }

    render() {
        let search = this.state.query.toLowerCase().trim();
        let results = this.context.restaurants;

        //search the database for search term
        if (search.length !== 0) {
            results = this.context.restaurants.filter(r => {
                return (
                    (r.rName.toLowerCase().indexOf(search) !== -1) ||
                    (r.rType.toLowerCase().indexOf(search) !== -1) ||
                    (r.rCity.toLowerCase().indexOf(search) !== -1) ||
                    (r.rState.toLowerCase().indexOf(search) !== -1) ||
                    (r.rZip.toLowerCase().indexOf(search) !== -1) ||
                    (r.rAddress.toLowerCase().indexOf(search) !== -1)
                )
            })
        }

        return (
            <section className='SearchContent'>
                <SearchForm updateSearch={this.updateSearch} />
                <h2 className="formTitle">Restaurant List</h2>
                <div className="searchResults">
                    <ul className="resultList">
                        {results.map(rest => {
                            return (
                                <NavLink
                                    key={rest.r_id} 
                                    to={{ pathname: `/restaurants/${rest.r_id}` }}
                                    className="resultButton"
                                >
                                    <li className = "resultButtonBox">
                                        {rest.r_name}
                                    </li>
                                </NavLink>
                            )
                        })}
                    </ul>
                </div>
            </section >
        )
    };
}