

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
    type?: string
}

interface GetDataCategory {
    type?: string
}


export class Api {

    getDataGoods({ id, type }: GetDataGoods): Promise<{ items: Good[], total: number }> {
        if (type !== undefined && id !== undefined) {
            return fetch(`/api/goods?ids=${id}`).then((resp) => {
                if (resp.ok) {
                    return resp.json()
                }
                throw new Error("Goods not working")
            })
        } else if(id !== undefined) {
            return fetch(`/api/goods?categoryTypeIds=${id}`).then((resp) => {
                if (resp.ok) {
                    return resp.json()
                }
                throw new Error("Goods not working")
            })
        }
            return fetch('/api/good').then((resp) => {
                if (resp.ok) {
                    return resp.json()
                }
                throw new Error("Goods not working")
            })
    }

    getDataCategory({ type }: GetDataCategory): Promise<{  categories: Category[] }> {
        if(type !== undefined) {
            return fetch(`/api/categories?ids=${type}`).then((resp) => {
                if (resp.ok) {
                    return resp.json()
                }
                throw new Error("List of categories not working")
            })
        }

            return fetch('/api/categories').then((resp) => {
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
        }).then((data) => {
            const { carts } = data
            return carts
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