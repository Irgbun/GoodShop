import { createStore } from 'redux'


const INITIAL_STORE = { popularCategories: [], categories: [] }


const reducer = (prevState = INITIAL_STORE) => {
    return
}


export const store = createStore(reducer)