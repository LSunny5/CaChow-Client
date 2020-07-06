import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './DeleteRestaurant.css';

export default class DeleteRestaurantPage extends Component {
    render() {
        return (
            <section className='deleteContent'>
                <h2 className="deleteHeading">Deleting Restaurant...</h2>
                <div className="restaurantBox">
                    <p className="deleteMessage">
                        Are you sure you want to delete the restaurant and all the information?
                    </p>
                    <div className = "buttonBox">


                        <NavLink to={'/ownerView'} onClick={this.deleteRestaurant}>Delete</NavLink>
                        <NavLink to={'/ownerView'}>Cancel</NavLink>
                   
                   
                    </div>
                </div>
            </section >
        )
    };
}