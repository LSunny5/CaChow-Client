//get all the restaurants associated with the username
export const getRest = (restaurants = [], username) =>
    (!username) ? restaurants : restaurants.filter(r => r.r_owner === username);

//get the restaurant object by its id
export const findRest = (restaurants = [], id) =>
    restaurants.find(r => r.r_id === parseInt(id));

//get the hours entry for the restaurant
export const findRestaurantHours = (hours = [], hoursId) =>
    hours.find(h => h.hours_id === parseInt(hoursId));

//get all the menu items and info of the restaurant by restaurant id
export const getMenuItems = (menu = [], restId) => {
    return (!restId) ? menu : menu.filter(item => item.item_restaurant === parseInt(restId));
}

//find the menu entry using restaurant id
export const findMenuId = (menu = [], restId) =>
    menu.find(m => m.item_restaurant === parseInt(restId));