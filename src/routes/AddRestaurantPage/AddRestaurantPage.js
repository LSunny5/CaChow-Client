import React, { Component } from 'react';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';
import '../../components/RestaurantForm/RestaurantForm.css';

export default class AddRestaurantPage extends Component {
    render() {
        return (
            <section className='RFormContent'>
                <h2 className="formTitle">Add a Restaurant</h2>
                <RestaurantForm />
            </section >
        )
    };
};