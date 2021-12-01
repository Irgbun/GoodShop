import { createStore } from 'redux'
import { rootReducer } from './reducers'

export type RootState = ReturnType<typeof store.getState>

export const store = createStore(rootReducer)

// categories: [{ id: 1, type: "house", label: "Дом" }]
// popularCategories: {
//  category: { id: 1, type: "house", label: "Дом" }, 
//  items: [
//      { id: 1, category_type: "house", label: "Коврик", price: 90, img: "https://source.unsplash.com/random", description: "Описание продукта, который мы должны видеть тут" }
//  ]}