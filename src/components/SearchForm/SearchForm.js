import React from 'react';
import './Search.css';

class SearchForm extends React.Component {
    updateSearchTerm = (event) => {
        this.props.updateSearch(event.target.value);
    }

    render() {
        return (
            <form>
                <label htmlFor="searchBar" className='labelDesign'>
                    <input type="text"
                        id="searchBar"
                        placeholder="Search..."
                        name="searchBar"
                        className="searchText"
                        autoComplete="off"
                        onChange={this.updateSearchTerm} >
                    </input>
                </label>
            </form>
        );
    };
}

export default SearchForm;