import { LOAD_STATUSES } from './constants'

export interface Cart {
    id: string,
    label: string
}

export interface State {
    loadStatus: LOAD_STATUSES,
    data: Cart[]
}