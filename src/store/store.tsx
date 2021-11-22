import { createStore } from 'redux'


const INITIAL_STORE = {
    popularCategories: {
        category: { id: 1, type: "house", label: "Дом" },
        items: [
            {
                id: 1,
                category_type: "house",
                label: "Коврик",
                price: 88,
                img: "https://source.unsplash.com/random"
            }, {
                id: 2,
                category_type: "house",
                label: "Коврик",
                price: 92,
                img: "https://source.unsplash.com/random"
            }, {
                id: 3,
                category_type: "house",
                label: "Коврик",
                price: 98,
                img: "https://source.unsplash.com/random"
            }, {
                id: 4,
                category_type: "house",
                label: "Коврик",
                price: 96,
                img: "https://source.unsplash.com/random"
            }, {
                id: 5,
                category_type: "house",
                label: "Коврик",
                price: 99,
                img: "https://source.unsplash.com/random"
            }, {
                id: 6,
                category_type: "house",
                label: "Коврик",
                price: 99,
                img: "https://source.unsplash.com/random"
            }, {
                id: 7,
                category_type: "house",
                label: "Коврик",
                price: 99,
                img: "https://source.unsplash.com/random"
            }, {
                id: 8,
                category_type: "house",
                label: "Коврик",
                price: 99,
                img: "https://source.unsplash.com/random"
            }, {
                id: 9,
                category_type: "house",
                label: "Коврик",
                price: 99,
                img: "https://source.unsplash.com/random"
            }, {
                id: 10,
                category_type: "house",
                label: "Коврик",
                price: 99,
                img: "https://source.unsplash.com/random"
            }, {
                id: 11,
                category_type: "house",
                label: "Коврик",
                price: 99,
                img: "https://source.unsplash.com/random"
            }, {
                id: 12,
                category_type: "house",
                label: "Коврик",
                price: 99,
                img: "https://source.unsplash.com/random"
            }, {
                id: 13,
                category_type: "house",
                label: "Коврик",
                price: 99,
                img: "https://source.unsplash.com/random"
            }, {
                id: 14,
                category_type: "house",
                label: "Коврик",
                price: 99,
                img: "https://source.unsplash.com/random"
            }]
    }, 
    categories: [
    { id: 1, type: "house", label: "Дом" },
    { id: 2, type: "house2", label: "Дом2" },
    { id: 3, type: "house3", label: "Дом3" },
    { id: 4, type: "house4", label: "Дом4" }]
}


const reducer = (prevState = INITIAL_STORE) => {
    return prevState;
}


export const store = createStore(reducer)