import React, { Component } from 'react';
import CachowContext from '../../CachowContext';
import { NavLink } from 'react-router-dom';
import './Account.css';

//import AuthApiService from '../../services/auth-api-service'
import { getRest } from '../../CachowHelpers';

//import MenuItemForm from '../../components/MenuItemForm/MenuItemForm';
//import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';

export default class Account extends Component {
    static contextType = CachowContext;
    /* constructor() {
        super();
        this.state = {
            query: '',
        }
    }

    //update the text value in the search field
    handleChange = (title, value) => {
        this.setState({ [title]: value });
    }
 */






    render() {
        const { restaurants } = this.context;
        let uname = localStorage.getItem('name');

        let listRest = getRest(restaurants) || {};

        console.log(listRest);

        return (
            <section className='AccountPage'>
                <h2 className="formTitle">Welcome {uname}!</h2>

                {(listRest.length > 0) ? (
                    listRest.map(restaurant =>
                        <div className="restaurantBox" key={restaurant.r_id}>
                            <NavLink
                                to={`/restaurants/${restaurant.r_id}`}
                                className="rView">
                                {restaurant.r_name}
                            </NavLink>
                            <br />
                            <NavLink to={`/addMenuItem`} className="ownerButton">
                                Add Menu Item
                            </NavLink>
                            <br />
                            <NavLink to={`/restaurants/edit/${restaurant.r_id}`}
                                className="ownerButton">
                                Edit Restaurant
                            </NavLink>
                            <br />
                            <NavLink to={`/restaurants/edit/hours/${restaurant.r_id}`}
                                className="ownerButton addRest">
                                Edit Hours
                            </NavLink>
                            <br />

                            <NavLink to={`/restaurants/${restaurant.r_id}/menu/editItems`}
                                className="ownerButton">
                                Edit Menu Items
                            </NavLink>

                            <NavLink to={`/restaurants/${restaurant.r_id}/delete`}
                                className="ownerButton">
                                Delete Restaurant
                            </NavLink>

                        </div>
                    )) : (
                        <div className="noRestaurants">
                            You have not added any restaurants at this time...
                        </div>
                    )}

                <div className="otherButtonBox">
                    <NavLink to={`/restaurants/hours/add`}
                        className="addRestButton">
                        + Add Restaurant
                        </NavLink>
                    <br />
                    <br />
                    <br />
                    <NavLink to={`/deleteUser`}
                        className="ownerButton removeButton">
                        Remove Account
                    </NavLink>
                </div>
                <br />
                <br />
            </section >
        )
    };
}