import { RootState } from "../store"

export const getCategories = (state: RootState) => state.categories.data
export const getCategoriesStatus = (state: RootState) => state.categories.loadStatus