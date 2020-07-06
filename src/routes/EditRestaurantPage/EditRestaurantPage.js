import React, { Component } from 'react';
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm';

import CachowContext from '../../CachowContext';
import { NavLink } from 'react-router-dom';
import '../../components/RestaurantForm/RestaurantForm.css';


export default class EditRestaurantPage extends Component {
     static contextType = CachowContext;
    /*constructor() {
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
        /* let search = this.state.query.toLowerCase().trim();

        const {restaurants} = this.context.restaurants;
        */

        return (
            <section className='editRestaurantContent'>
                <h2 className="editRHeading">Edit Restaurant Info</h2>
                <RestaurantForm /* updateSearch={this.updateSearch} */ />
                
                
                <div className="buttonBox">
                    <NavLink
                        to={`/restaurants/1`}
                        className="button"
                    >
                        Update
                        </NavLink>
                    <NavLink
                        className="button"
                        to={`/ownerView`}
                    >
                        Cancel
                        </NavLink>
                </div>  



            </section >
        )
    };
}