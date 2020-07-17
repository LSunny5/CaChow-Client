import React, { Component } from 'react';
import CachowContext from '../../CachowContext';
import { NavLink } from 'react-router-dom';
import './Account.css';

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
       // const { restaurants } = this.context;

        return (
            <section className='RFormContent'>
                <h2 className="formTitle">Welcome Owner!</h2>
                <div className="restaurantBox">

                    <NavLink to={`/restaurants/1`}>ShakeShack</NavLink>
                    <br/>
                    <br />
                    <NavLink to={`/editRestaurant/1`} className="ownerButton">Edit Restaurant</NavLink>
                    <NavLink to={`/restaurants/1/editMenuItems`} className="ownerButton">Edit Menu Items</NavLink>
                    <br />
                    <br />
                    
                    <NavLink to={`/deleteRestaurant/1`} className="ownerButton">Delete Restaurant</NavLink>
                    
                </div>
                <br/>
                <NavLink to={`/deleteUser/3`} className="ownerButton">Remove Account</NavLink>
            </section >
        )
    };
}