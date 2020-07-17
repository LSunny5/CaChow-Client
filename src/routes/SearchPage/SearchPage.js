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

        const {restaurants} = this.context;

        //search the database for search term
        if (search.length !== 0) {
            results = restaurants.filter(r => {
                return (
                    (r.r_name.toLowerCase().indexOf(search) !== -1) ||
                    (r.r_type.toLowerCase().indexOf(search) !== -1) ||
                    (r.r_city.toLowerCase().indexOf(search) !== -1) ||
                    (r.r_state.toLowerCase().indexOf(search) !== -1) ||
                    (r.r_zip.toLowerCase().indexOf(search) !== -1) ||
                    (r.r_address.toLowerCase().indexOf(search) !== -1)
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