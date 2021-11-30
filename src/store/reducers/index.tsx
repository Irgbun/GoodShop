import { combineReducers } from 'redux'
import { popularCategories } from './popularCategories/popularCategories'
import { cart } from './cart/cart'
import { menuCategories } from './menuCategories/menuCategories'


export const rootReducer = combineReducers({ 
    popularCategories,
    cart,
    menuCategories
 })
