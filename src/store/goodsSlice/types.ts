import { LOAD_STATUSES } from './constants'

export interface Goods {
    id: number,
    label: string,
    type: string,
    img: string,
    price: number,
    description: string
}

export interface State {
    loadStatus: LOAD_STATUSES,
    data: Goods[]
}
