import { CATEGORIES_ACTIONS } from './constants'
import { Categories, GetDataCategory } from './types'
import { Api } from '../../api'
import { Dispatch } from 'react'

export const getCategories = () => ({ type: CATEGORIES_ACTIONS.GET_CATEGORIES })

export const getCategoriesSuccess = (menuCategories: Categories[]) => ({
    type: CATEGORIES_ACTIONS.GET_CATEGORIES_SUCCESS,
    payload: menuCategories
})

export const getCategoriesFailure = () => ({ type: CATEGORIES_ACTIONS.GET_CATEGORIES_FAILURE })



export const fetchCategories = ({ type }: GetDataCategory) => async(dispatch: Dispatch<any>) => {
    dispatch(getCategories())
    new Api().getDataCategory({ type }).then((data) => dispatch(getCategoriesSuccess(data.categories))).catch(() => dispatch(getCategoriesFailure()))
}














