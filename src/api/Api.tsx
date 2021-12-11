

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

    getDataGoods(id?: string, type?: string): Promise<{ items: Goods[], total: number }> {
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

    getDataCategory(id?: string): Promise<{  categories: Category[] }> {
        if(id !== undefined) {
            return fetch(`/api/categories?ids=${id}`).then((resp) => {
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

    getDataPopularCategory(): Promise<{ category: Category, items: Goods[] }[]> {
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

    putDataCart(cartForPut: Goods) {
        return fetch('/api/cart', {
            method: 'PUT',
            body: JSON.stringify(cartForPut),
        }).then((resp) => {
            if (resp.ok) {
                console.log("Респ PUT запроса: ", resp)
                return resp.json()
            }
        }).then((data) => {
            console.log("Все получилось, мы получили данные назад с PUT запросом", data)
            return data
        })
    }

    deleteDataCart(cartForDelete: Goods) {
        return fetch('/api/cart', {
            method: 'DELETE',
            body: JSON.stringify(cartForDelete),
        }).then((resp) => {
            if(resp.ok) {
                console.log("Респ DELETE запроса", resp)
                return resp.json()
            }
        }).then((data) => {
            console.log("Все получилось, мы получили данные назад с DELETE запросом", data)
            return data
        })
    }
}