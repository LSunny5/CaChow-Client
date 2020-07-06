import React from 'react';
import './App.css';
import dummyStore from './dummy-store';
import CachowContext from './CachowContext';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './components/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
import PageNotFound from './components/PageNotFound/PageNotFound';
import LoginPage from './routes/LoginPage/LoginPage';
import RegisterPage from './routes/RegisterPage/RegisterPage';
import SearchPage from './routes/SearchPage/SearchPage';

import Restaurant from './components/Restaurant/Restaurant';
import RestaurantFormPage from './routes/RestaurantFormPage/RestaurantFormPage';
import AddMenuItemPage from './routes/MenuItemPage/MenuItemPage';

import OwnerView from './components/OwnerView/OwnerView';
import EditMenuItemPage from './routes/EditMenuItemPage/EditMenuItemPage';
import EditRestaurantPage from './routes/EditRestaurantPage/EditRestaurantPage';
import DeleteRestaurantPage from './routes/DeleteRestaurantPage/DeleteRestaurantPage';
import DeleteUserPage from './routes/DeleteUserPage/DeleteUserPage';


class App extends React.Component {
  static contextType = CachowContext;
  state = {
    owners: [],
    users: [],
    restaurants: [],
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

          {/* Routes for Restaurant Info */}
          {['/restaurants/:rId'].map(path => (
            <Route
              key={path}
              path={path}
              exact
              component={Restaurant}
            />
          ))}

          {/* Route for adding a restaurant Page */}
          <Route path='/addRestaurant' exact component={RestaurantFormPage} />

          {/* Route for adding a menu item page */}
          <Route path='/addMenuItem' exact component={AddMenuItemPage} />

          {/* Route for special screen for owner */}
          <Route path='/ownerView' exact component={OwnerView} />

          {/* Routes for Editing Restaurant */}
          <Route path='/editRestaurant/:rId' exact component={EditRestaurantPage} />

          {/* Routes for Editing Menu Items */}
          <Route path='/restaurants/:rId/editMenuItems' exact component={EditMenuItemPage} />

          {/* Routes for Deleting Restaurant */}
          <Route path='/deleteRestaurant/:rId' exact component={DeleteRestaurantPage} />

          {/* Routes for Deleting User */}
          <Route path='/deleteUser/:uId' exact component={DeleteUserPage} />

          {/* Route for Page Not Found */}
          <Route path='*' component={PageNotFound} />
        </Switch>
      </div>
    );
  }

  render() {
    const contextValue = {
      owners: this.state.owners,
      restaurants: this.state.restaurants,
      users: this.state.users,
      categories: this.state.categories,


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