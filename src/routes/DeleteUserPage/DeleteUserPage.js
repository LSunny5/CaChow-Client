import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './DeleteUser.css';

export default class DeleteUserPage extends Component {
    render() {
        return (
            <section className='deleteContent'>
                <h2 className="deleteHeading">Deleting User...</h2>
                <div className="restaurantBox">
                    <p className="deleteMessage">
                        Are you sure you want to delete this account?
                    </p>
                    <div className = "buttonBox">


                        <NavLink to={'/login'} onClick={this.deleteRestaurant}>Delete</NavLink>
                        <NavLink to={'/ownerView'}>Cancel</NavLink>
                   
                   
                    </div>
                </div>
            </section >
        )
    };
}