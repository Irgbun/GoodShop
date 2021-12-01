import React from "react";

interface Goods {
    id: number,
    label: string,
    category_type: string,
    img: string,
    price: number,
    description: string
}

interface Category {
    id: number,
    label: string,
    type: string,
}

export class Api {

    getDataGoods(): Promise<{ items: Goods[], total: number }> {
        return fetch('/api/good').then((resp) => {
            if (resp.ok) {
                return resp.json()
            }
        })
    }

    getDataCategory(): Promise<{  categories: Category[] }> {
        return fetch('/api/categories').then((resp) => {
            if (resp.ok) {
                return resp.json()
            }
        })
    }

    getDataPopularCategory(): Promise<{ category: Category[], items: Goods[] }> {
        return fetch('/api/popular_categories').then((resp) => {
            if (resp.ok) {
                return resp.json()
            }
        })
    }

    getDataCart() {
        return fetch('/api/cart').then((resp) => {
            if (resp.ok) {
                return resp.json()
            }
        })
    }
}