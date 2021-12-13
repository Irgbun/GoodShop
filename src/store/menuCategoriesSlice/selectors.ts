import { RootState } from "../store"

export const getCategories = (state: RootState) => state.menuCategories.data
export const getCategoriesStatus = (state: RootState) => state.menuCategories.loadStatus