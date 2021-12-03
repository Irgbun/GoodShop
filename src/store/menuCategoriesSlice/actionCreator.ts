import { MENU_CATEGORIES_ACTIONS } from './constants'
import { MenuCategories } from './types'

export const getMenuCategories = () => ({ type: MENU_CATEGORIES_ACTIONS.GET_MENU_CATEGORIES })

export const getMenuCategoriesSuccess = (menuCategories: MenuCategories[]) => ({
    type: MENU_CATEGORIES_ACTIONS.GET_MENU_CATEGORIES_SUCCESS,
    payload: menuCategories
})

export const getMenuCategoriesFailure = () => ({
    type: MENU_CATEGORIES_ACTIONS.GET_MENU_CATEGORIES_FAILURE
})


















