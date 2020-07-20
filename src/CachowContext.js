import React from 'react'

export default React.createContext({
  restaurants: [],
  hours: [], 
  categories: [], 
  menu: [], 
  addHours: () => {}, 
  updateHours: () => {}, 
  addItem: () => {}, 
  updateItem: () => {}, 
  deleteItem: () => {}, 
  addRestaurant: () => {},
  updateRestaurant: () => {}, 
  deleteRestaurant: () => {},  
})
