import { LOAD_STATUSES } from "./constants";

export interface MenuCategories {
    id: number,
    label: string,
    type: string
}

export interface State {
    loadStatus: LOAD_STATUSES,
    data: MenuCategories[]
}