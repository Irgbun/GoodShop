import { RootState } from './store'

export const getPopularCategories = (state: RootState) => state.popularCategories
export const getCategories = (state: RootState) => state.categories