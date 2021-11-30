import React from "react";

interface ItemsArray {
    id: number,
    label: string,
    category_type: string,
    img: string,
    price: number,
    description: string
}

interface CategoryArray {
    id: number,
    label: string,
    type: string,
}

export class Api extends React.Component {

    getDataItems(): Promise<{ items: ItemsArray[], total: number }> {
        return fetch('/api/good').then((resp) => {
            if (resp.ok) {
                return resp.json
            }
        })
    }

    getDataCategory(): Promise<{  categories: CategoryArray[] }> {
        return fetch('/api/categories').then((resp) => {
            if (resp.ok) {
                return resp.json
            }
        })
    }

    getDataPopularCategory(): Promise<{ category: CategoryArray[], items: ItemsArray[] }> {
        return fetch('/api/popular_categories').then((resp) => {
            if (resp.ok) {
                return resp.json
            }
        })
    }

    getDataCart() {
        return fetch('/api/cart').then((resp) => {
            if (resp.ok) {
                return resp.json
            }
        })
    }

    render () {
        return (
            <div>
                sdg
            </div>
        )
    }
}