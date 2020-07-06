import React, { Component } from 'react';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';


//import CachowContext from '../../CachowContext';


import { NavLink } from 'react-router-dom';
import '../../components/RestaurantForm/RestaurantForm.css';


export default class RestaurantFormPage extends Component {
    /* static contextType = CachowContext;
    constructor() {
        super();
        this.state = {
            query: '',
        }
    }

    //update the text value in the search field
    updateSearch = (value) => {
        this.setState({ query: value });
    }
 */
    render() {

        return (
            <section className='RFormContent'>
                <h2 className="formTitle">Add a Restaurant</h2>
                <RestaurantForm /* updateSearch={this.updateSearch} */ />
                
                <div className="buttonBox">
                    <NavLink
                        to={`/addMenuItem`}
                        className="button"
                    >
                        Next
                        </NavLink>
                    <NavLink
                        className="button"
                        to={`/login`}
                    >
                        Cancel
                        </NavLink>
                </div>  



            </section >
        )
    };
}