import { POPULAR_CATEGORIES_ACTIONS } from './constants'
import { PopularCategories } from './types'

export const getPopularCategories = () => ({ type: POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES })

export const getPopularCategoriesSuccess = (popularCategories: PopularCategories) => ({
    type: POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES_SUCCESS,
    payload: popularCategories
})

export const getPopularCategoriesFailure = () => ({
    type: POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES_FAILURE
})


















