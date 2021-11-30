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
        return fetch('./serverShop.js').then((resp) => {
            if (resp.ok) {
                return resp.json
            }
        })
    }

    getDataCAtegory(): Promise<{  categories: CategoryArray[], total: number }> {
        return fetch('./serverShop.js').then((resp) => {
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