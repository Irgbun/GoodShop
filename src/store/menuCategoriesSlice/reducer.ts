import { MENU_CATEGORIES_ACTIONS, LOAD_STATUSES } from './constants'
import { Action } from "redux";
import { State } from './types'



const INITIAL_STATE: State = {
    loadStatus: LOAD_STATUSES.UNKNOWN,
    data: []
}

export function menuCategories(state = INITIAL_STATE, action: Action<MENU_CATEGORIES_ACTIONS>) {
    switch(action.type) {
        case MENU_CATEGORIES_ACTIONS.GET_MENU_CATEGORIES:
            return {    
                ...state,
                loadStatus: LOAD_STATUSES.LOADING
            }
        case MENU_CATEGORIES_ACTIONS.GET_MENU_CATEGORIES_SUCCESS:
            const { payload } = action as {
                type: MENU_CATEGORIES_ACTIONS.GET_MENU_CATEGORIES_SUCCESS,
                payload: State['data']
            }
            return {
                data: payload,
                loadStatus: LOAD_STATUSES.LOADED
            }
        case MENU_CATEGORIES_ACTIONS.GET_MENU_CATEGORIES_FAILURE:
            return {
                ...state,
                loadStatus: LOAD_STATUSES.FAILURE
            }
        default:
            return state
    }
}