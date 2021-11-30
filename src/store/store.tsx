import { createStore } from 'redux'
import { rootReducer } from './reducers'

export type RootState = ReturnType<typeof store.getState>

const INITIAL_STORE = {
    popularCategories: {
        category: [{ id: 1, type: "house", label: "Дом" }],
        items: [
            { id: 1, category_type: "house", label: "Коврик", price: 90, img: "https://source.unsplash.com/random", description: "Описание продукта, который мы должны видеть тут" },
            { id: 2, category_type: "house", label: "Коврик", price: 82, img: "https://source.unsplash.com/random", description: "Описание продукта, который мы должны видеть тут" },
            { id: 3, category_type: "house", label: "Коврик", price: 89, img: "https://source.unsplash.com/random", description: "Описание продукта, который мы должны видеть тут" },
            { id: 4, category_type: "house", label: "Коврик", price: 82, img: "https://source.unsplash.com/random", description: "Описание продукта, который мы должны видеть тут" },
            { id: 5, category_type: "house", label: "Коврик", price: 93, img: "https://source.unsplash.com/random", description: "Описание продукта, который мы должны видеть тут" },
            { id: 6, category_type: "house", label: "Коврик", price: 85, img: "https://source.unsplash.com/random", description: "Описание продукта, который мы должны видеть тут" },
            { id: 7, category_type: "house", label: "Коврик", price: 97, img: "https://source.unsplash.com/random", description: "Описание продукта, который мы должны видеть тут" },
            { id: 8, category_type: "house", label: "Коврик", price: 92, img: "https://source.unsplash.com/random", description: "Описание продукта, который мы должны видеть тут" },
            { id: 9, category_type: "house", label: "Коврик", price: 86, img: "https://source.unsplash.com/random", description: "Описание продукта, который мы должны видеть тут" },
            { id: 10, category_type: "house", label: "Коврик", price: 88, img: "https://source.unsplash.com/random", description: "Описание продукта, который мы должны видеть тут" },
            { id: 11, category_type: "house", label: "Коврик", price: 84, img: "https://source.unsplash.com/random", description: "Описание продукта, который мы должны видеть тут" },
            { id: 12, category_type: "house", label: "Коврик", price: 96, img: "https://source.unsplash.com/random", description: "Описание продукта, который мы должны видеть тут" }]
    }, 
    categories: [
    { id: 1, type: "house", label: "Дом" },
    { id: 2, type: "house2", label: "Дом2" },
    { id: 3, type: "house3", label: "Дом3" }]
}

export const store = createStore(rootReducer)