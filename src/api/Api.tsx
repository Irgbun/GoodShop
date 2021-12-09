interface Goods {
    id: string,
    label: string,
    categoryTypeId: string,
    img: string,
    price: number,
    description: string
}

interface Category {
    id: string,
    label: string,
    type: string,
}

export class Api {

    getDataGoods(id?: string): Promise<{ items: Goods[], total: number }> {
        return fetch(`/api/good?categoryTypeId=${id}`).then((resp) => {
            if (resp.ok) {
                return resp.json()
            }
            throw new Error("Goods not working")
        })
    }

    getDataCategory(): Promise<{  categories: Category[] }> {
        return fetch('/api/categories').then((resp) => {
            if (resp.ok) {
                return resp.json()
            }
            throw new Error("List of categories not working")
        })
    }

    getDataPopularCategory(id?: string): Promise<{ category: Category, items: Goods[] }[]> {
        return fetch(`/api/popular_categories?id=${id}`).then((resp) => {
            if (resp.ok) {
                console.log(resp)
                return resp.json()
            }
            throw new Error("Popular categories not working")
        })
    }

    getDataCart() {
        return fetch('/api/cart').then((resp) => {
            if (resp.ok) {
                return resp.json()
            }
            throw new Error("cart not working")
        })
    }

    putDataCart() {
        return fetch('/api/cart', {
            method: 'PUT',
            body: "",
        })
    }
}