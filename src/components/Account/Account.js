import React, { Component } from 'react';
import CachowContext from '../../CachowContext';
import { NavLink } from 'react-router-dom';
import './Account.css';
import { getRest } from '../../CachowHelpers';
import PropTypes from 'prop-types';

export default class Account extends Component {
    static contextType = CachowContext;

    render() {
        const { restaurants } = this.context;
        let uname = localStorage.getItem('name');
        let listRest = getRest(restaurants, uname) || {};

        return (
            <section className='AccountPage'>
                <h2 className="formTitle">Welcome {uname}!</h2>
                <div className="otherButtonBox">
                    <NavLink to={`/restaurants/hours/add`}
                        className="addRestButton">
                        + Add Restaurant
                        </NavLink>
                </div>
                {/* create a new box with functions for each of the restaurants for user */}
                {(listRest.length > 0) ? (
                    listRest.map(restaurant =>
                        <div className="restaurantBox" key={restaurant.r_id}>
                            <div className="RestaurantName">
                                <NavLink
                                    to={`/restaurants/${restaurant.r_id}`}
                                    className="rView">
                                    {restaurant.r_name}
                                </NavLink>
                            </div>
                            <div className="buttonsboxes">
                                <NavLink to={`/restaurants/${restaurant.r_id}/edit`}
                                    className="ownerButton">
                                    Edit Restaurant
                                </NavLink>
                                <NavLink to={`/restaurants/${restaurant.r_id}/hours`}
                                    className="ownerButton addRest">
                                    Edit Hours
                                </NavLink>
                                <NavLink to={`/restaurants/${restaurant.r_id}/addItem`} className="ownerButton green">
                                    Add Menu Item
                                </NavLink>
                                <NavLink to={`/restaurants/${restaurant.r_id}/editItems`}
                                    className="ownerButton">
                                    Edit Menu Items
                                </NavLink>
                                <NavLink to={`/restaurants/${restaurant.r_id}/delete`}
                                    className="ownerButton redandbold">
                                    Delete Restaurant
                                </NavLink>
                            </div>
                        </div>
                    )) : (
                        <div className="noRestaurants">
                            You have not added any restaurants at this time...
                        </div>
                    )}
                <br />
                <div className="otherButtonBox">
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

Account.propTypes = {
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