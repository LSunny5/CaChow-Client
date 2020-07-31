import React, { Component } from 'react';
import '../DeleteUserPage/DeleteUser.css';
import config from '../../config';
import TokenService from '../../services/token-service';
import CachowContext from '../../CachowContext';
import { findRest } from '../../CachowHelpers';
import PropTypes from 'prop-types';

export default class DeleteRestaurantPage extends Component {
    static contextType = CachowContext;
    handleDelete = (event) => {
        event.preventDefault();

        const { restaurants } = this.context;
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
                window.location.href = '/account';
            })
            .catch(error => {
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
                <div className="deleteBox">
                    <p className="deleteMessage">
                        Are you sure you want to <span className="redandbold">delete</span> the restaurant and all the information?
                    </p>
                    <div className="deleteBox">
                        <button className="deleteButton redshade redandbold" onClick={this.handleDelete}>Delete</button>
                        <button className="deleteButton yellowshade" onClick={this.handleCancel}>Cancel</button>
                    </div>
                </div>
            </section>
        )
    };
}

DeleteRestaurantPage.propTypes = {
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
    r_id: PropTypes.number,
    history: PropTypes.object,
};