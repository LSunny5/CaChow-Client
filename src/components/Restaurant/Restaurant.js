import React from 'react';
import './Restaurant.css';
import CachowContext from '../../CachowContext';
//import {findRestaurant, findHours} from '../../CachowHelpers';

class Restaurant extends React.Component {
    static contextType = CachowContext;

    findRestaurant = (restaurants = [], id) => {
        return restaurants.find(rest => rest.r_id === parseInt(id));
    }

    findHours = (hours = [], hoursId) => {
        return hours.find(h => h.hours_id === parseInt(hoursId));
    }

    getItems = (menu = [], restId) => {
        return (!restId) ? menu : menu.filter(item => item.item_restaurant === restId)
    };



    printItem = (item, categories, cat) => {
        for (let i = 1; i <= categories.length; i++) {
            if (parseInt(item.item_cat) === i) {

                    return (
                        <li key={item.item_id} className="category">
                            {categories[i - 1].cat_name}
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

        const targetRestaurant = this.findRestaurant(restaurants, r_id) || {};
        const targetHours = this.findHours(hours, targetRestaurant.r_hours) || {};
        const targetItems = this.getItems(menu, r_id);





        //for every item in the category group > 0 print 

        return (
            <div className="restaurantContent">
                <section className="restaurantInfo">
                    <p className="restaurantName">({targetRestaurant.r_type})</p>
                    <h1 className="restaurantName">{targetRestaurant.r_name}</h1>
                    <p className="restaurantName">{targetRestaurant.r_address}</p>
                    <p className="restaurantName">{targetRestaurant.r_city}, {targetRestaurant.r_state}  {targetRestaurant.r_zip}</p>
                    <p className="restaurantName">{targetRestaurant.r_phone}</p>
                    <br />
                    <div className="hoursBox">
                        <h3 className="hoursHeading">Hours: </h3>
                        <p>Sunday: <span className="hoursDisplay">{targetHours.sun_open}</span> to <span className="hoursDisplay">{targetHours.sun_close}</span> </p>
                        <p>Monday: <span className="hoursDisplay">{targetHours.mon_open}</span> to <span className="hoursDisplay">{targetHours.mon_close}</span>  </p>
                        <p>Tuesday: <span className="hoursDisplay">{targetHours.tues_open}</span> to <span className="hoursDisplay">{targetHours.tues_close}</span> </p>
                        <p>Wednesday: <span className="hoursDisplay">{targetHours.wed_open}</span> to <span className="hoursDisplay">{targetHours.wed_close}</span> </p>
                        <p>Thursday: <span className="hoursDisplay">{targetHours.thu_open}</span> to <span className="hoursDisplay">{targetHours.thu_close}</span> </p>
                        <p>Friday: <span className="hoursDisplay">{targetHours.fri_open}</span> to <span className="hoursDisplay">{targetHours.fri_close}</span> </p>
                        <p>Saturday: <span className="hoursDisplay">{targetHours.sat_open}</span> to <span className="hoursDisplay">{targetHours.sat_close}</span> </p>
                    </div>
                </section>
                <br />
                <section className="restaurantMenu">
                    <h2 className="menuHeading">Menu</h2>
                    <ul className="menuList">

                        {targetItems.map(item => this.printItem(item, categories, item.item_cat))}





                        {/*  {targetItems.map(item =>
                        <li key={item.item_id} className="category">
                                {item.item_cat}
                                <ul>


                                    <li className="foodName">
                                        {item.item_name}
                                        <span className="price">${item.item_price}</span>


                                    </li>

                                </ul>
                            </li>
                        )
    } */}

                        {/* {for (let i = 1; i <= categories.length; i++) {
                                if (item.item_cat === i) {

                                    
                                        <li key={item.item_id} className="category">
                                            {item.item_cat}
                                            <ul>


                                                <li className="foodName">
                                                    {item.item_name}
                                                    <span className="price">${item.item_price}</span>


                                                </li>

                                            </ul>
                                        </li>


                                    




                                }  */}































                        {/*  {targetRestaurant.menu.forEach(item => {
                        <li> 
                            {menu.catId}
                        </li>
                    })
                     } */}

                        {/* <li className="category">
                            Burgers
                            <ul>
                                <li className="foodName">Single ShackBurger <span className="price">${targetRestaurant.menu[0].price}</span></li>
                                <li className="foodName">Single SmokeStack <span className="price">$7.39</span></li>
                            </ul>
                        </li>
                        <li className="category">Chicken
                            <ul>
                            <li className="foodName">Chick'n Shack <span className="price">$7.19</span></li>
                            </ul>
                        </li>
                        <li className="category">Sides
                            <ul>
                            <li className="foodName">Cheese Fries <span className="price">$4.09</span></li>
                            </ul>
                        </li>
                        <li className="category">Desserts
                            <ul>
                            <li className="foodName">S'mores Shake <span className="price">$5.99</span></li>
                            </ul>
                        </li>
                        <li className="category">Drinks
                            <ul>
                            <li className="foodName">Small Pink Lemonade <span className="price">$3.09</span></li>
                            </ul>
                        </li>
                     */}
                    </ul>
                </section>
            </div>
        );
    }
}

export default Restaurant;