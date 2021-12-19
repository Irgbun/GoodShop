

interface Good {
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

interface GetDataGoods {
    id?: string,
    type?: string,
    text?: string
}

interface GetDataCategory {
    type?: string
}


export class Api {

    getDataGoods({ id, type, text }: GetDataGoods): Promise<{ items: Good[], total: number }> {
        const params = JSON.parse(JSON.stringify({categoryTypeIds: type, ids: id, text}))
        const param = new URLSearchParams(params).toString()
        return fetch(`/api/goods?${param}`).then((resp) => {
            if (resp.ok) {
                return resp.json()
            }
            throw new Error("Goods not working")
        })
    }

    getDataCategory({ type }: GetDataCategory): Promise<{  categories: Category[] }> {
        const params = JSON.parse(JSON.stringify({ids: type}))
        const param = new URLSearchParams(params).toString()
        return fetch(`/api/categories?${param}`).then((resp) => {
            if (resp.ok) {
                return resp.json()
            }
            throw new Error("List of categories not working")
        })
    }

    getDataPopularCategory(): Promise<{ category: Category, items: Good[] }[]> {
        return fetch('/api/popular_categories').then((resp) => {
            if (resp.ok) {
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

    putDataCart(cartForPut: Good) {
        return fetch('/api/cart', {
            method: 'PUT',
            body: JSON.stringify(cartForPut),
        }).then((resp) => {
            if (resp.ok) {
                console.log(resp)
                return resp.json()
            }
        }).then((data) => {
            return data
        })
    }

    deleteDataCart(cartForDelete: Good) {
        return fetch('/api/cart', {
            method: 'DELETE',
            body: JSON.stringify(cartForDelete),
        }).then((resp) => {
            if(resp.ok) {
                return resp.json()
            }
        }).then((data) => {
            return data
        })
    }
}