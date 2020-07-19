import React from 'react';
import './MenuItemForm.css';
import config from '../../config';
import TokenService from '../../services/token-service';
import {NavLink} from 'react-router-dom';
import CachowContext from '../../CachowContext';

class MenuItemForm extends React.Component {
    static contextType = CachowContext;

    handleUpdate = event => {
        const { title, value } = event.target;
        this.setState({ [title]: value.trim() });
    }


    handleSubmit = event => {
        event.preventDefault();

        const {restaurants} = this.context;

        const newItem = {
            item_restaurant: restaurants.length, 
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
                
                //this.props.history.push(`/restaurant/${menu[menu.length-1].item_id}`);
                //this.props.history.push(`/restaurants/${newItem.item_id}`);
                //this.props.history.push(`/restaurants/`);
                //window.location.reload();
                window.location.href = `/restaurants/${newItem.item_restaurant}`;
            })
            .catch(error => {
                console.error({ error })
                alert('Error! Item was not added:  ' + error);
            })
    };



    updateItem = () => {
        console.log('item is updated');
    }

    deleteItem = () => {
        console.log('item is deleted');
    }

    /* alertCancelUser = () => {
        alert('Sorry, you did not finish registration, back to login screen...')
    }

    alertCompleteUser = () => {
        alert('Congrats you have completed the registration process!')
    } */

    render() {
        const { categories } = this.context;
        return (
            <form className="addForm" onSubmit={this.handleSubmit}>
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
                <label htmlFor="category" className="inputLabel">Category: </label>

                <select id="category" className="inputEdit"
                    value={categories.cat_id}
                    required
                    onChange={this.handleUpdate}
                >
                    {categories.slice(0, categories.length).map(category =>
                        <option
                            key={category.cat_id}
                            value={category.cat_id}
                        >
                            {category.cat_name}
                        </option>
                    )}
                </select>
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
                <br />
                {/* <button onClick={this.updateItem} className="itemButton">Update Item</button> */}
                {/* <button onClick={this.deleteItem} className="itemButton"> - Remove Item</button> */}
            </fieldset>
            <div className="buttonBox extraMargin">
                        <button type='submit' className="button">
                            Add Item
                        </button>
                        {/* <NavLink
                            to={`/account`}
                            className="button"
                            onClick={this.alertCompleteUser}
                        >
                            Complete
                        </NavLink> */}
                        <NavLink
                            onClick={this.alertCancelUser}
                            className="button"
                            to={`/account`}
                        >
                            Cancel
                        </NavLink>
                    </div>
            </form>
        );
    };
}

export default MenuItemForm;