

export const columnsName = [
    {
        title: "Название",
        dataIndex: "label",
        key: "label",
        sorter: {
            compere: (a: any, b: any) => a.label - b.label,
            multiple: 1
        }
    },
    {
        title: "Категория",
        dataIndex: "category",
        key: "category",
    },
    {
        title: "Цена",
        dataIndex: "price",
        key: "price",
        sorter: {
            compere: (a: any, b: any) => a.price - b.price,
            multiple: 1
        }
    }
]

export interface Filters {
    text: string,
    minPrice: number,
    maxPrice: number,
    favouriteCategories: string[],
    limit: number,
    offset: number
}

export const PRICE_SLIDER_MAX_VALUE = 1000

export const INITIAL_FILTERS: Filters = {
    text: "",
    minPrice: 0,
    maxPrice: PRICE_SLIDER_MAX_VALUE,
    favouriteCategories: [],
    limit: 20,
    offset: 0 
}