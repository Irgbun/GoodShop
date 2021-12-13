import { LOAD_STATUSES } from "./constants";

export interface MenuCategories {
    id: string,
    label: string,
    type: string
}

export interface State {
    loadStatus: LOAD_STATUSES,
    data: MenuCategories[]
}

export interface GetDataCategory {
    type?: string
}