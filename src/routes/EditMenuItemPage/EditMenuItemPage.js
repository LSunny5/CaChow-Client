import React, { Component } from 'react';
import '../../components/MenuItemForm/MenuItemForm.css';
import config from '../../config';
import TokenService from '../../services/token-service';
import { findMenuId, getMenuItems } from '../../CachowHelpers';
import CachowContext from '../../CachowContext';
import { NavLink } from 'react-router-dom';

export default class EditMenuItemPage extends Component {
    static contextType = CachowContext;

    
    handleUpdate = event => {
        const { title, value } = event.target;
        this.setState({ [title]: value.trim() });
    }

    handleDelete = (itemId) => {
        fetch(`${config.APIENDPOINT}/menu/${itemId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(response => {
                if (!response.ok)
                    return response.json().then(error => Promise.reject(error))
                return response
            })
            .then(() => {
                this.context.deleteItem(itemId);
            })
            .catch(error => {
                alert('Could not delete item:  ' + error);
            })
    }

    handleCancel = () => {
        alert('Item was not deleted...');
    }


    handlePatch = event => {
        event.preventDefault();
        const { r_id } = this.props.match.params;
        let menuItem = findMenuId(this.context.menu, r_id);

        const editedItem = {
            item_restaurant: r_id,
            item_name: event.target['itemName'].value,
            item_cat: event.target['category'].value,
            item_price: event.target['itemPrice'].value,
        }

        fetch(`${config.APIENDPOINT}/menu/${menuItem.item_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(editedItem),
        })
            .then(response => {
                if (!response.ok)
                    return response.json().then(e => Promise.reject(e))
                return response
            })
            .then(item => {
                this.context.updateItem(editedItem);
                alert('Item updated!');
                window.location.reload();
            })
            .catch(error => {
                console.error({ error })
                alert('Error! Item was not updated:  ' + error);
            })
    };

    render() {
        const { categories, menu } = this.context;
        const { r_id } = this.props.match.params;
        let items = getMenuItems(menu, r_id);

        return (
            <section className='RFormContent'>
                <h2 className="formTitle">Edit Menu Items</h2>
                {(items.length > 0) ? (
                    items.map(item =>
                        <div className="editItemBox" key={item.item_id}>
                            <form className="addForm" onSubmit={this.handlePatch}>
                                <fieldset>
                                    <label htmlFor="itemName" className="inputLabel">Name of Item: </label>
                                    <input
                                        type="text"
                                        id="itemName"
                                        name="itemName"
                                        defaultValue={item.item_name}
                                        className="textField"
                                        placeholder="Add name of menu item here..."
                                        onChange={this.handleUpdate}
                                    />
                                    <label htmlFor="category" className="inputLabel">Category: </label>

                                    <select id="category" className="inputEdit"
                                        required
                                        defaultValue={item.item_cat}
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
                                        type="money"
                                        id="itemPrice"
                                        name="itemPrice"
                                        className="textField"
                                        defaultValue={item.item_price}
                                        step={0.01}
                                        precision={2}
                                        placeholder="Add price (ex. 0.00)"
                                        onChange={this.handleUpdate}
                                    />
                                    <div className="editButtonBox">
                                        <button type='submit'>Update</button>
                                        <button onClick={() => {
                                            if (window.confirm('Are you sure you wish to delete this item?') ? this.handleDelete(item.item_id) : this.handleCancel()) 
                                                this.handleCancel()
                                        }}>
                                            Delete
                                        </button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    )) : (
                        <div className="noItemsBox">
                            There are no items to edit for this restaurant...
                        </div>
                    )}
                <div className="buttonBox">
                    <NavLink
                        to={`/restaurants/${r_id}`}
                        className="button"
                    >
                        Finished
                        </NavLink>
                    <NavLink
                        className="button"
                        to={`/account`}
                    >
                        Cancel
                        </NavLink>
                </div>

            </section >
        )
    };
}