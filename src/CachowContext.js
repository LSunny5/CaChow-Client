import React from 'react'

export default React.createContext({
  restaurants: [],
  hours: [], 
  categories: [], 
  menu: [], 
  addHours: () => {}, 
  updateHours: () => {}, 
  deleteHours: () => {},
  addItem: () => {}, 
  updateItem: () => {}, 
  deleteItem: () => {}, 
  addRestaurant: () => {},
  updateRestaurant: () => {}, 
  deleteRestaurant: () => {},  
})
