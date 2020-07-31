import React from 'react';
import './MenuItemForm.css';
import config from '../../config';
import TokenService from '../../services/token-service';
import { NavLink } from 'react-router-dom';
import CachowContext from '../../CachowContext';
import PropTypes from 'prop-types';

class MenuItemForm extends React.Component {
    static contextType = CachowContext;

    handleUpdate = event => {
        const { title, value } = event.target;
        this.setState({ [title]: value.trim() });
    }

    handleSubmit = event => {
        event.preventDefault();

        const newItem = {
            item_restaurant: this.props.restId,
            item_name: event.target['itemName'].value,
            item_cat: event.target['category'].value,
            item_price: event.target['itemPrice'].value,
        }

        fetch(`${config.APIENDPOINT}/menu`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newItem),
        })
            .then(response => {
                if (!response.ok)
                    return response.json().then(e => Promise.reject(e))
                return response.json()
            })
            .then(tip => {
                this.context.addItem(newItem);
                alert('Item was added!');
                window.location.href = `/restaurants/${newItem.item_restaurant}`;
            })
            .catch(error => {
                alert('Error! Item was not added:  ' + error);
            })
    };

    render() {
        const { categories } = this.context;

        return (
            <div>
                <form className="formBox" onSubmit={this.handleSubmit} >
                    <fieldset>
                        <label htmlFor="itemName" className="inputLabel">Name of Item: </label>
                        <input
                            type="text"
                            id="itemName"
                            name="itemName"
                            className="textField"
                            placeholder="Add name of menu item here..."
                            onChange={this.handleUpdate}
                        />
                        <br />
                        <br />
                        <label htmlFor="category" className="inputLabel">Category: </label>
                        <select id="category" className="inputEdit smaller"
                            value={categories.cat_id}
                            required
                            onChange={this.handleUpdate}
                        >
                            {categories.map(category =>
                                <option
                                    key={category.cat_id}
                                    value={category.cat_id}
                                >
                                    {category.cat_name}
                                </option>
                            )}
                        </select>
                        <br />
                        <br />
                        <label htmlFor="itemPrice" className="inputLabel">Price: </label>
                        <input
                            type="number"
                            id="itemPrice"
                            name="itemPrice"
                            className="textField"
                            step={0.01}
                            precision={2}
                            placeholder="Add price (ex. 0.00)"
                            onChange={this.handleUpdate}
                        />
                        <div className="buttonBox">
                            <button type='submit' className="generalButton submit">
                                Add
                            </button>
                            <NavLink
                                className="generalButton cancel"
                                to={`/account`}
                            >
                                Cancel
                            </NavLink>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    };
}

MenuItemForm.propTypes = {
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
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            cat_id: PropTypes.number.isRequired,
            cat_name: PropTypes.string.isRequired,
        })
    ),
    restId: PropTypes.number,
}

export default MenuItemForm;