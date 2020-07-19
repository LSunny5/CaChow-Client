export const getUserId = (users = [], name) =>
    users.find(user => user.user_name === name);


/* export const getTips = (tips = [], categoryId) => (
    (!categoryId)
        ? tips
        : tips.filter(tip => tip.category_id === categoryId)
); */

/* 
export const findRestaurant = (restaurants = [], id) => {
    return restaurants.find(rest => rest.r_id === parseInt(id));
}

export const findHours = (hours = [], hoursId) => {
    return hours.find(h => h.hours_id === parseInt(hoursId));
} */

//get the hours id for the restaurant
/* export const getHourId = (hours = [], hourId) => (
    (!hourId) ? hours : hours.filter(hour => hour.hours_id === hourId)
); */


//find user id
/* export const getUserId = (users, name) => {
    let temp = (!name) ? users : users.filter(user => user.user_name === name);
    let userid= temp.map(user => user.user_id);
    console.log(userid);
    return temp.user_id;
} */




export const getRest = (restaurants = [], id) => 
    (!id) ? restaurants : restaurants.filter(r => r.r_owner === id)

