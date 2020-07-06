import React from 'react';
import './MenuItemForm.css';

//import {NavLink} from 'react-router-dom';

class MenuItemForm extends React.Component {
    handleUpdate = event => {
        const { title, value } = event.target;
        this.setState({ [title]: value.trim() });
    }

    addItem = (event) => {
        event.preventDefault();
    }

    updateItem = () => {
        console.log('item is updated');
    }

    deleteItem = () => {
        console.log('item is deleted');
    }

    alertCancelUser = () => {
        alert('Sorry, you did not finish registration, back to login screen...')
    }

    alertCompleteUser = () => {
        alert('Congrats you have completed the registration process!')
    }

    render() {
        return (
            <form className="addForm" /* onSubmit={this.handleSubmit} */ >
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
                    <input
                        type="text"
                        id="category"
                        name="category"
                        className="textField"
                        placeholder="Add category (Breakfast, Lunch, Dinner...)"
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <label htmlFor="itemPrice" className="inputLabel">Price: </label>
                    <input
                        type="number"
                        id="itemPrice"
                        name="itemPrice"
                        className="textField"
                        placeholder="Add price (ex. 0.00)"
                        onChange={this.handleUpdate}
                    />
                    <br/>
                    <button onClick={this.updateItem} className="itemButton">Update Item</button>
                    <button onClick={this.deleteItem} className="itemButton"> - Remove Item</button>
                </fieldset>
                <button onClick={this.addItem} className="addItemButton"> + Add item </button>
            </form>

        );
    };
}

export default MenuItemForm;