import React from 'react';
import './App.css';
import dummyStore from './dummy-store';
import CachowContext from './CachowContext';
import {Route, Switch} from 'react-router-dom';

import LandingPage from './components/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
import PageNotFound from './components/PageNotFound/PageNotFound';
import LoginPage from './routes/LoginPage/LoginPage';
import RegisterPage from './routes/RegisterPage/RegisterPage';
import SearchPage from './routes/SearchPage/SearchPage';


class App extends React.Component {
  static contextType = CachowContext;
  state = {
    owners: [], 
    users: [], 
    restaurant: [], 
    categories: [], 
  }

  //load dummy files
  componentDidMount() {
    setTimeout(() => this.setState(dummyStore), 600);
  }




  //routes for navigation bar
  renderNavRoutes() {
    return ( 
      <header> 
        <Switch> 
          <Route path='/' exact />
          <Route path='/login' exact />
          {/* Route for Login page */}
          <Route component={NavBar} />
          {/* <Route component = {NavBar} /> */}
        </Switch>
      </header>
    );
  };

  //routes for the content body
  renderMainRoutes() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={LandingPage} />

          {/* Route for Login page */}
          <Route path='/login' exact component={LoginPage} />

          {/* Route for Register User */}
          <Route path='/register' exact component={RegisterPage} />






          {/* Route for Search results */}
          <Route path='/search' exact component={SearchPage} />



         

  
          {/* Route for Page Not Found */}
          <Route path='*' component={PageNotFound} />
        </Switch>
      </div>
    );
  }

  render() {
    const contextValue = {


      //categories: this.state.categories,
    };

    return (
      <CachowContext.Provider value={contextValue}>
        <main>
          <div className="navBarBox">
            {this.renderNavRoutes()}
          </div>
          <div className="content">
            {this.renderMainRoutes()}
          </div>
        </main>
      </CachowContext.Provider>
    )
  };
};

export default App;