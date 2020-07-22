import React, { Component } from 'react';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';
import '../../components/RestaurantForm/RestaurantForm.css';
import CachowContext from '../../CachowContext';
import TokenService from '../../services/token-service';
import config from '../../config';

export default class AddRestaurantPage extends Component {
    static contextType = CachowContext;
    

    render() {
        return (
            <section className='RFormContent'>
                <h2 className="formTitle">Add a Restaurant</h2>
                <RestaurantForm />
                
            </section >
        )
    };
}