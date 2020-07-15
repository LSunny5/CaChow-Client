import React from 'react';
import './App.css';
import CachowContext from './CachowContext';
import { Route, Switch } from 'react-router-dom';
import config from './config';

/* import TokenService from '../src/services/token-service';
import AuthApiService from '../src/services/auth-api-service';
import IdleService from '../src/services/idle-service'; */

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
    restaurants: [],
    hours: [],
    categories: [],
    menu: [],


    users: [],
  }

  componentDidMount() {
    Promise.all([
      /* fetch(`${config.APIEndpoint}/users`),*/
      fetch(`${config.APIEndpoint}/restaurants`),
      fetch(`${config.APIEndpoint}/hours`),
      fetch(`${config.APIEndpoint}/menu`),
      fetch(`${config.APIEndpoint}/category`),
    ])
      .then(([restaurantResponse, hoursResponse, menuResponse, catResponse/*, usersResponse */]) => {
        if (!hoursResponse.ok)
          return hoursResponse.json().then(event => Promise.reject(event));
        if (!restaurantResponse.ok)
          return restaurantResponse.json().then(event => Promise.reject(event));
        if (!catResponse.ok)
          return catResponse.json().then(event => Promise.reject(event));
        if (!menuResponse.ok)
          return menuResponse.json().then(event => Promise.reject(event));
        /* if (!usersResponse.ok)
          return usersResponse.json().then(event => Promise.reject(event)); */
        return Promise.all([restaurantResponse.json(), hoursResponse.json(), catResponse.json(), menuResponse.json()/* , usersResponse.json() */ ]);
      })
      .then(([restaurants, hours, categories, menu/* , users */ ]) => {
        this.setState({restaurants, hours, categories, menu/* , users */ });
      })
      .catch(error => {
        console.error({ error });
        alert('Could not retrieve data - ' + error);
      });
    /* IdleService.setIdleCallback(this.logoutFromIdle)
    if (TokenService.hasAuthToken()) {
      IdleService.registerIdleTimerResets()
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken()
      })
    } */
  }

  /* componentWillUnmount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()
  } */

  /* logoutFromIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.forceUpdate()
  } */

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
          {['/restaurants/:r_id'].map(path => (
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
          <Route path='/editRestaurant/:r_id' exact component={EditRestaurantPage} />

          {/* Routes for Editing Menu Items */}
          <Route path='/restaurants/:rId/editMenuItems' exact component={EditMenuItemPage} />

          {/* Routes for Deleting Restaurant */}
          <Route path='/deleteRestaurant/:r_id' exact component={DeleteRestaurantPage} />

          {/* Routes for Deleting User */}
          <Route path='/deleteUser/:user_id' exact component={DeleteUserPage} />

          {/* Route for Page Not Found */}
          <Route path='*' component={PageNotFound} />
        </Switch>
      </div>
    );
  }

  render() {
    const contextValue = {

      restaurants: this.state.restaurants,
      hours: this.state.hours,

      users: this.state.users,
      categories: this.state.categories,
      menu: this.state.menu

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