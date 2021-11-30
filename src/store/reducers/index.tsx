import { combineReducers } from 'redux'
import { popularCategories } from './popularCategories'
import { cart } from './cart'
import { menuCategories } from './menuCategories'


export const rootReducer = combineReducers({ 
    popularCategories,
    cart,
    menuCategories
 })
