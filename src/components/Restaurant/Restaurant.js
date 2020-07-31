import React from 'react';
import './Restaurant.css';
import CachowContext from '../../CachowContext';
import { findRest, findRestaurantHours, getMenuItems } from '../../CachowHelpers';
import PropTypes from 'prop-types';

class Restaurant extends React.Component {
    static contextType = CachowContext;

    printItem = (item, categories, cat) => {
        for (let i = 1; i <= categories.length; i++) {
            if (parseInt(item.item_cat) === i) {
                return (
                    <li key={item.item_id} className="bulletlist">
                        <p className="category">
                            {categories[i - 1].cat_name}
                        </p>
                        <ul>
                            <li key={item.item_id} className="foodName">
                                {item.item_name}
                                <span className="price">{item.item_price}</span>
                            </li>

                        </ul>
                    </li>
                )
            }
        }
    }

    render() {
        const { restaurants = [], hours = [], menu = [], categories = [] } = this.context;
        const { r_id } = this.props.match.params;
        const targetRestaurant = findRest(restaurants, r_id) || {};
        const targetHours = findRestaurantHours(hours, targetRestaurant.r_hours) || {};
        const targetItems = getMenuItems(menu, r_id);
        return (
            <div className="restaurantContent">
                <section className="restaurantInfo">
                    <h1 className="restaurantName">{targetRestaurant.r_name}</h1>
                    <p className="restaurantText">{targetRestaurant.r_address}</p>
                    <p className="restaurantText">{targetRestaurant.r_city}, {targetRestaurant.r_state}  {targetRestaurant.r_zip}</p>
                    <p className="restaurantText">{targetRestaurant.r_phone}</p>
                    <p className="restaurantType">{targetRestaurant.r_type}</p>
                    <br />
                    <div className="hoursBox">
                        <h3 className="hoursHeading">Hours: </h3>
                        <p className="day">Sunday: <span className="hoursDisplay">{targetHours.sun_open}</span> to <span className="hoursDisplay">{targetHours.sun_close}</span> </p>
                        <p className="day">Monday: <span className="hoursDisplay">{targetHours.mon_open}</span> to <span className="hoursDisplay">{targetHours.mon_close}</span>  </p>
                        <p className="day">Tuesday: <span className="hoursDisplay">{targetHours.tues_open}</span> to <span className="hoursDisplay">{targetHours.tues_close}</span> </p>
                        <p className="day">Wednesday: <span className="hoursDisplay">{targetHours.wed_open}</span> to <span className="hoursDisplay">{targetHours.wed_close}</span> </p>
                        <p className="day">Thursday: <span className="hoursDisplay">{targetHours.thu_open}</span> to <span className="hoursDisplay">{targetHours.thu_close}</span> </p>
                        <p className="day">Friday: <span className="hoursDisplay">{targetHours.fri_open}</span> to <span className="hoursDisplay">{targetHours.fri_close}</span> </p>
                        <p className="day">Saturday: <span className="hoursDisplay">{targetHours.sat_open}</span> to <span className="hoursDisplay">{targetHours.sat_close}</span> </p>
                    </div>
                </section>
                <br />
                <section className="restaurantMenu">
                    <h2 className="menuHeading">Menu</h2>
                    <ul className="menuList">
                        {targetItems.map(item => this.printItem(item, categories, item.item_cat))}
                    </ul>
                </section>
            </div>
        );
    }
}

Restaurant.propTypes = {
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
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            item_id: PropTypes.number.isRequired,
            item_restaurant: PropTypes.number.isRequired,
            item_name: PropTypes.string.isRequired,
            item_cat: PropTypes.number.isRequired,
            item_price: PropTypes.number,
        })
    ),
    hours: PropTypes.arrayOf(
        PropTypes.shape({
            sun_open: PropTypes.string,
            sun_close: PropTypes.string,
            mon_open: PropTypes.string,
            mon_close: PropTypes.string,
            tues_open: PropTypes.string,
            tues_close: PropTypes.string,
            wed_open: PropTypes.string,
            wed_close: PropTypes.string,
            thu_open: PropTypes.string,
            thu_close: PropTypes.string,
            fri_open: PropTypes.string,
            fri_close: PropTypes.string,
            sat_open: PropTypes.string,
            sat_close: PropTypes.string,
            hours_owner: PropTypes.string.isRequired,
        })
    ),
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            cat_id: PropTypes.number.isRequired,
            cat_name: PropTypes.string.isRequired,
        })
    ),
    r_id: PropTypes.number,
}

export default Restaurant;