import React, { Component } from 'react';
//import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';


//import CachowContext from '../../CachowContext';


import { NavLink } from 'react-router-dom';
import '../../components/MenuItemForm/MenuItemForm.css';
import MenuItemForm from '../../components/MenuItemForm/MenuItemForm';


export default class MenuItemPage extends Component {
    /* static contextType = CachowContext;
    constructor() {
        super();
        this.state = {
            query: '',
        }
    }

    //update the text value in the search field
    handleChange = (title, value) => {
        this.setState({ [title]: value });
    }
 */

    addItem = () => {
        return (
            <MenuItemForm />
        )
    }

    render() {
    

        return (
            <section className='RFormContent'>
                <h2 className="formTitle">Add Menu Items</h2>
                <form className="addForm" /* onSubmit={this.handleSubmit} */ >
                        <MenuItemForm />
                <button onClick={this.addItem} className="addItemButton"> + Add item </button>
            
                <div className="buttonBox">
                        <NavLink
                            to={`/account`}
                            className="button"
                            onClick={this.alertCompleteUser}
                        >
                            Complete
                        </NavLink>
                        <NavLink
                            onClick={this.alertCancelUser}
                            className="button"
                            to={`/login`}
                        >
                            Cancel
                        </NavLink>
                    </div>
                    </form>
            </section >
            
        )
    };
}