import { POPULAR_CATEGORIES_ACTIONS } from './constants'
import { PopularCategories } from './types'
import { Api } from '../../api'
import { Dispatch } from 'react'

export const getPopularCategories = () => ({ type: POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES })

export const getPopularCategoriesSuccess = (popularCategories: PopularCategories[]) => ({
    type: POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES_SUCCESS,
    payload: popularCategories
})

export const getPopularCategoriesFailure = () => ({
    type: POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES_FAILURE
})



export const fetchPopularCategories = () => async(dispatch: Dispatch) => {
    dispatch(getPopularCategories())
    new Api().getDataPopularCategory().then((data) => dispatch(getPopularCategoriesSuccess(data))).catch(() => dispatch(getPopularCategoriesFailure()))
}
















