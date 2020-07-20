import React, { Component } from 'react';
import './DeleteRestaurant.css';
import config from '../../config';
import TokenService from '../../services/token-service';
import CachowContext from '../../CachowContext';
import { findRest } from '../../CachowHelpers';

export default class DeleteRestaurantPage extends Component {
    static contextType = CachowContext;
    handleDelete = (event) => {
        event.preventDefault();

        const {restaurants} = this.context;
        const { r_id } = this.props.match.params;
        let found = findRest(restaurants, r_id);

        fetch(`${config.APIENDPOINT}/hours/${found.r_hours}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(response => {
                if (!response.ok)
                    return response.json().then(e => Promise.reject(e))
                return response
            })
            .then(() => {
                this.context.deleteRestaurant(r_id);
                alert('Restaurant has been successfully deleted!');
                window.location.href='/account';
            })
            .catch(error => {
                console.error({ error })
                alert('Error! Restaurant was not deleted:  ' + error);
            })
    }

    handleCancel = () => {
        alert('Delete canceled, returning to account screen...');
        this.props.history.push('/account');
    }

    render() {
        return (
            <section className='deleteContent'>
                <h2 className="deleteHeading">Deleting Restaurant...</h2>
                <div className="restaurantBox">
                    <p className="deleteMessage">
                        Are you sure you want to <span className="redandbold">delete</span> the restaurant and all the information?
                    </p>
                    <div className="buttonBox">
                        <button className="deleteButton redandbold" onClick={this.handleDelete}>Delete</button>
                        <button className="deleteButton" onClick={this.handleCancel}>Cancel</button>
                    </div>
                </div>
            </section>
        )
    };
}