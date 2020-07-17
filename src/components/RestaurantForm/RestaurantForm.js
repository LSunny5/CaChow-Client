import React from 'react';
import './RestaurantForm.css';
import config from '../../config';
import { NavLink } from 'react-router-dom';
import CachowContext from '../../CachowContext';

class RestaurantForm extends React.Component {
    static contextType = CachowContext;

    handleUpdate = event => {
        const { title, value } = event.target;
        this.setState({ [title]: value.trim() });
    }

    handleSubmit = event => {
        event.preventDefault();
        const newRestaurant = {
            r_owner: 3,
            r_image: event.target['restaurantImage'].value,
            r_type: event.target['restaurantType'].value,
            r_name: event.target['restaurantName'].value,
            r_address: event.target['restaurantAddress'].value,
            r_city: event.target['restaurantCity'].value,
            r_state: event.target['restaurantState'].value,
            r_zip: event.target['restaurantZip'].value,
            r_phone: event.target['restaurantPhone'].value,
            /* r_hours: 1, */
            r_hours: this.context.hours.length - 1
        }
        
    //    console.log(newRestaurant.r_hours)

        fetch(`${config.APIENDPOINT}/restaurants`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRestaurant),
        })
            .then(response => {
                if (!response.ok)
                    return response.json().then(e => Promise.reject(e))
                return response.json()
            })
            .then(restaurant => {
                this.context.addRestaurant(restaurant);
                console.log('restaurant added')
                window.location.href = '/addMenuItem';
            })
            .catch(error => {
                console.error({ error })
                alert('Error! ' + error);
            })
    }

    render() {
        //const {hours = []} = this.context;
        //let hourId = hours.length + 1;
        return (

            <form className="addForm" onSubmit={this.handleSubmit}>
                <fieldset>
                    <label htmlFor="restaurantName" className="inputLabel">Name of Restaurant: </label>
                    <input
                        type="text"
                        id="restaurantName"
                        name="restaurantName"
                        className="textField"
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
                        placeholder="Add phone number here..."
                        onChange={this.handleUpdate}
                    />
                    <div className="buttonBox">
                        <button type='submit' className="button">
                            Next
                        </button>
                        <NavLink className="button" to={`/login`}>
                            Cancel
                        </NavLink>
                    </div>

                </fieldset>



            </form>
        );
    };
}

export default RestaurantForm;