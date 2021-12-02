import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { menuCategoriesReducer } from './menuCategoriesSlice'
import { popularCategoriesReducer } from './popularCategoriesSlice'
import { cartReducer } from './cartSlice'

const rootReducer = combineReducers({
    menuCategories: menuCategoriesReducer,
    popularCategories: popularCategoriesReducer,
    cart: cartReducer
})

export type RootState = ReturnType<typeof store.getState>

export const store = createStore(rootReducer, applyMiddleware(thunk))

// categories: [{ id: 1, type: "house", label: "Дом" }]
// popularCategories: {
//  category: { id: 1, type: "house", label: "Дом" }, 
//  items: [
//      { id: 1, category_type: "house", label: "Коврик", price: 90, img: "https://source.unsplash.com/random", description: "Описание продукта, который мы должны видеть тут" }
//  ]}