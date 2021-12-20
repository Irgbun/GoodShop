import { LOAD_STATUSES } from './constants'

export interface Goods {
    id: string,
    label: string,
    categoryTypeId: string,
    img: string,
    price: number,
    description: string
}

export interface GoodsWithTotal {
    items: Goods[],
    total: number
}

export interface State {
    loadStatus: LOAD_STATUSES,
    data: GoodsWithTotal
}

export interface GetDataGoods {
    id?: string,
    type?: string,
    text?: string,
    minPrice?: number,
    maxPrice?: number,
    limit?: number,
    offset?: number
}