import { LOAD_STATUSES } from './constants'

export interface Cart {
    id: string,
    label: string
}

export interface Product {
    id: string,
    categoryTypeId: string,
    label: string,
    img: string,
    description: string,
    price: number
}

export interface State {
    loadStatus: LOAD_STATUSES,
    data: Cart[]
}