import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { categoriesReducer } from './categoriesSlice'
import { popularCategoriesReducer } from './popularCategoriesSlice'
import { cartReducer } from './cartSlice'
import { goodsReducer } from './goodsSlice'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    popularCategories: popularCategoriesReducer,
    cart: cartReducer,
    goods: goodsReducer
})

export type RootState = ReturnType<typeof store.getState>

export const store = createStore(rootReducer, applyMiddleware(thunk))