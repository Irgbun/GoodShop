import { LOAD_STATUSES } from './constants'

export interface Goods {
    id: string,
    label: string,
    categoryTypeId: string,
    img: string,
    price: number,
    description: string
}

export interface State {
    loadStatus: LOAD_STATUSES,
    data: Goods[]
}

export interface GetDataGoods {
    id?: string,
    type?: string
}