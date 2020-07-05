import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';



export default class SearchPage extends Component {


  static defaultProps = {


    history: {
      push: () => {},
    },





  }

  /* constructor() {
      super();
      this.state={
          search: '', 
          results: [],
      }
  } */

  state = { search: ''}

  getSearchValue = (searchInput) => {
      this.setState({search: searchInput});
  }




  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')



  }

  render() {
    return (
      <section className='SearchContent'>    
        <SearchForm searchWord = {this.getSearchValue()}/>
         <h2 className = "formTitle">Search Results</h2>
        <div className="searchResults">

            <p> {this.state.search} </p>








        </div>
      </section>
    )
  }
}
