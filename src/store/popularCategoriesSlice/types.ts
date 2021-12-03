import { LOAD_STATUSES } from "./constants";

export interface PopularCategories { 
    categories: {
        id: number,
        type: string,
        label: string
    },
    items: {
        id: number,
        type: string,
        label: string,
        price: number,
        img: string,
        description: string
    }[]
}

export interface State {
    loadStatus: LOAD_STATUSES,
    data: PopularCategories[]
}