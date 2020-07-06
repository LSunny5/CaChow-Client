import React from 'react';
import './Restaurant.css';
import CachowContext from '../../CachowContext';
//import { NavLink } from 'react-router-dom';

class Restaurant extends React.Component {
    static contextType = CachowContext;

    findRestaurant = (restaurants = [], id) => {
        return restaurants.find(rest => rest.rId === parseInt(id));
    }

    render() {

        const { restaurants = [] } = this.context;
        const { rId } = this.props.match.params;

        const targetRestaurant = this.findRestaurant(restaurants, rId) || {};

        
        // console.log(targetRestaurant)

        //console.log(targetRestaurant.rHours);
        // console.log(targetRestaurant.menu);

        return (
            <div className="restaurantContent">
                <section className="restaurantInfo">
                    <p className="restaurantName">({targetRestaurant.rType})</p>
                    <h1 className="restaurantName">{targetRestaurant.rName}</h1>
                    <p className="restaurantName">{targetRestaurant.rAddress}</p>
                    <p className="restaurantName">{targetRestaurant.rCity}, {targetRestaurant.rState}  {targetRestaurant.rZip}</p>
                    <p className="restaurantName">{targetRestaurant.rPhone}</p>
                    <br />
                    <div className="hoursBox">
                        <h3 className="hoursHeading">Hours: </h3>
                        <p>Sunday: 11AM to 3PM </p>
                        <p>Monday: 1PM to 4PM  </p>
                        <p>Tuesday: 11AM to 3PM </p>
                        <p>Wednesday: 11AM to 3PM </p>
                        <p>Thursday: 11AM to 3PM </p>
                        <p>Friday: 11AM to 3PM </p>
                        <p>Saturday: 11AM to 3PM </p>
                    </div>
                </section>
                <br />
                <section className="restaurantMenu">
                    <h2 className="menuHeading">Menu</h2>
                    <ul className="menuList">
                        {/*  {targetRestaurant.menu.forEach(item => {
                        <li> 
                            {menu.catId}
                        </li>
                    })
                     } */}

                        <li className="category">
                            Burgers
                            <ul>
                                <li className="foodName">Single ShackBurger <span className="price">$5.89</span></li>
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
                    </ul>
                </section>
            </div>
        );
    }
}

export default Restaurant;