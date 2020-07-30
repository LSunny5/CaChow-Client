import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import CachowContext from '../../CachowContext';
import { NavLink } from 'react-router-dom';
import '../../components/SearchForm/Search.css';
import PropTypes from 'prop-types';

class SearchPage extends React.Component {
    static contextType = CachowContext;
    constructor() {
        super();
        this.state = {
            query: '',
        };
    };

    //update the text value in the search field
    updateSearch = (value) => {
        this.setState({ query: value });
    };

    render() {
        let search = this.state.query.toLowerCase().trim();
        let results = this.context.restaurants;

        const { restaurants = [] } = this.context;

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
                );
            });
        };

        return (
            <section className='SearchContent'>
                <SearchForm updateSearch={this.updateSearch} />
                <h2 className="searchTitle">Restaurant List</h2>
                <div className="searchResults">
                    <ul className="resultList">
                        {results.map(rest => {
                            return (
                                <NavLink
                                    key={rest.r_id}
                                    to={{ pathname: `/restaurants/${rest.r_id}` }}
                                    className="resultButton"
                                    data-front={rest.r_name}
                                    data-back={rest.r_name}
                                >
                                </NavLink>
                            )
                        })}
                    </ul>
                </div>
            </section>
        );
    };
};

SearchPage.propTypes = {
    restaurants: PropTypes.arrayOf(
        PropTypes.shape({
            r_id: PropTypes.number.isRequired,
            r_owner: PropTypes.string.isRequired,
            r_image: PropTypes.string,
            r_type: PropTypes.string,
            r_name: PropTypes.string,
            r_address: PropTypes.string,
            r_city: PropTypes.string,
            r_state: PropTypes.string,
            r_zip: PropTypes.string,
            r_phone: PropTypes.string,
            r_hours: PropTypes.number.isRequired
        })
    ),
}

export default SearchPage;