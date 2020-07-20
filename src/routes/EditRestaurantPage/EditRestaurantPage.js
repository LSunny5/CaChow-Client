import React, { Component } from 'react';
import CachowContext from '../../CachowContext';
import '../../components/RestaurantForm/RestaurantForm.css';
import { findRest } from '../../CachowHelpers';
import { NavLink } from 'react-router-dom';
import config from '../../config';
import TokenService from '../../services/token-service';

export default class EditRestaurantPage extends Component {
    static contextType = CachowContext;
    handleUpdate = event => {
        const { title, value } = event.target;
        this.setState({ [title]: value.trim() });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let uname = localStorage.getItem('name');
        const { restaurants } = this.context;
        const { r_id } = this.props.match.params;
        let rest = findRest(restaurants, r_id) || {};

        console.log(event.target);

        const editedRestaurant = {
            r_owner: uname,
            r_image: event.target['restaurantImage'].value,
            r_type: event.target['restaurantType'].value,
            r_name: event.target['restaurantName'].value,
            r_address: event.target['restaurantAddress'].value,
            r_city: event.target['restaurantCity'].value,
            r_state: event.target['restaurantState'].value,
            r_zip: event.target['restaurantZip'].value,
            r_phone: event.target['restaurantPhone'].value,
            r_hours: rest.r_hours,
        }

        fetch(`${config.APIENDPOINT}/restaurants/${r_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(editedRestaurant),
        })
            .then(response => {
                if (!response.ok)
                    return response.json().then(e => Promise.reject(e))
                return response
            })
            .then(restaurant => {
                this.context.updateRestaurant(editedRestaurant);
                alert('Restaurant information successfully changed!');
                window.location.href = `/restaurants/${r_id}`;
            })
            .catch(error => {
                console.error({ error })
                alert('Error! ' + error);
            })
    }

    render() {
        const { restaurants } = this.context;
        const { r_id } = this.props.match.params;
        let rest = findRest(restaurants, r_id) || {};

        return (
            <section className='RFormContent'>
                <h2 className="formTitle">Edit Restaurant</h2>
                <form className="addForm" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <label htmlFor="restaurantName" className="inputLabel">Name of Restaurant: </label>
                        <input
                            type="text"
                            id="restaurantName"
                            name="restaurantName"
                            className="textField"
                            defaultValue={rest.r_name}
                            placeholder="Add name of restaurant here..."
                            onChange={this.handleUpdate}
                        />
                        <br />
                        <label htmlFor="restaurantImage" className="inputLabel">Add an image: </label>
                        <input
                            type="text"
                            id="restaurantImage"
                            name="restaurantImage"
                            className="textField"
                            defaultValue={rest.r_image}
                            placeholder="Add url of image here..."
                            onChange={this.handleUpdate}
                        />
                        <br />
                        <label htmlFor="restaurantType" className="inputLabel">What type of restaurant? </label>
                        <input
                            type="text"
                            id="restaurantType"
                            name="restaurantType"
                            className="textField"
                            defaultValue={rest.r_type}
                            placeholder="Add type here..."
                            onChange={this.handleUpdate}
                        />
                        <br />
                        <label htmlFor="restaurantAddress" className="inputLabel">Address: </label>
                        <input
                            type="text"
                            id="restaurantAddress"
                            name="restaurantAddress"
                            className="textField"
                            defaultValue={rest.r_address}
                            placeholder="Add address here..."
                            onChange={this.handleUpdate}
                        />
                        <br />
                        <label htmlFor="restaurantCity" className="inputLabel">City: </label>
                        <input
                            type="text"
                            id="restaurantCity"
                            name="restaurantCity"
                            className="textField"
                            defaultValue={rest.r_city}
                            placeholder="Add city here..."
                            onChange={this.handleUpdate}
                        />
                        <br />
                        <label htmlFor="restaurantState" className="inputLabel">State: </label>
                        <input
                            type="text"
                            id="restaurantState"
                            name="restaurantState"
                            className="textField"
                            defaultValue={rest.r_state}
                            placeholder="Add state here..."
                            onChange={this.handleUpdate}
                        />
                        <br />
                        <label htmlFor="restaurantZip" className="inputLabel">ZipCode: </label>
                        <input
                            type="text"
                            id="restaurantZip"
                            name="restaurantZip"
                            className="textField"
                            defaultValue={rest.r_zip}
                            placeholder="Enter zipcode "
                            onChange={this.handleUpdate}
                        />
                        <br />
                        <label htmlFor="restaurantPhone" className="inputLabel">Phone Number: </label>
                        <input
                            type="text"
                            id="restaurantPhone"
                            name="restaurantPhone"
                            className="textField"
                            defaultValue={rest.r_phone}
                            placeholder="Add phone number here..."
                            onChange={this.handleUpdate}
                        />
                        <div className="buttonBox">
                            <button type='submit' className="button">
                                Update
                        </button>
                            <NavLink className="button" to={`/account`}>
                                Cancel
                        </NavLink>
                        </div>
                    </fieldset>
                </form>
            </section>
        );
    };
}