import React from 'react';
import './RestaurantForm.css';

//import {NavLink} from 'react-router-dom';

class RestaurantForm extends React.Component {
    /* updateSearchTerm = (event) => {
        this.props.updateSearch(event.target.value);
    } */

    handleUpdate = event => {
        const { title, value } = event.target;
        this.setState({ [title]: value.trim() });
    }

    render() {
        return (

            <form className="addForm" /* onSubmit={this.handleSubmit} */ >
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
                <label htmlFor="restaurantPhone" className="inputLabel">Phone Number: </label>
                <input
                    type="text"
                    id="restaurantPhone"
                    name="restaurantPhone"
                    className="textField"
                    placeholder="Add phone number here..."
                    onChange={this.handleUpdate}
                />
                {/* <label htmlFor="restaurantHours" className="inputLabel">Hours: </label>
                <input
                    type="text"
                    id="restaurantImage"
                    name="restaurantImage"
                    className="textField"
                    placeholder="Add url of image here..."
                    onChange={this.handleUpdate}
                /> */}
               {/*  <label htmlFor="restaurantMenu" className="inputLabel">Hours: </label>
                <input
                    type="text"
                    id="restaurantImage"
                    name="restaurantImage"
                    className="textField"
                    placeholder="Add url of image here..."
                    onChange={this.handleUpdate}
                /> */}
                
                 
                </fieldset>
            </form>

        );
    };
}

export default RestaurantForm;