import { CATEGORIES_ACTIONS, LOAD_STATUSES } from './constants'
import { Action } from "redux";
import { State } from './types'



const INITIAL_STATE: State = {
    loadStatus: LOAD_STATUSES.UNKNOWN,
    data: []
}

export function categoriesReducer(state = INITIAL_STATE, action: Action<CATEGORIES_ACTIONS>) {
    switch(action.type) {
        case CATEGORIES_ACTIONS.GET_CATEGORIES:
            return {    
                ...state,
                loadStatus: LOAD_STATUSES.LOADING
            }
        case CATEGORIES_ACTIONS.GET_CATEGORIES_SUCCESS:
            const { payload } = action as {
                type: CATEGORIES_ACTIONS.GET_CATEGORIES_SUCCESS,
                payload: State['data']
            }
            return {
                data: payload,
                loadStatus: LOAD_STATUSES.LOADED
            }
        case CATEGORIES_ACTIONS.GET_CATEGORIES_FAILURE:
            return {
                ...state,
                loadStatus: LOAD_STATUSES.FAILURE
            }
        default:
            return state
    }
}