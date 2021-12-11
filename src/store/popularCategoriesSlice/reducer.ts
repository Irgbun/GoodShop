import { POPULAR_CATEGORIES_ACTIONS, LOAD_STATUSES } from './constants'
import { Action } from 'redux'
import { State } from './types'



const INITIAL_STATE: State = {
    loadStatus: LOAD_STATUSES.UNKNOWN,
    data: []
}

export function popularCategoriesReducer(state = INITIAL_STATE, action: Action<POPULAR_CATEGORIES_ACTIONS>) {
    switch(action.type) {
        case POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES:
            return {
                ...state,
                loadStatus: LOAD_STATUSES.LOADING
            }
        case POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES_SUCCESS:
            const { payload } = action as {
                type: POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES_SUCCESS,
                payload: State['data']
            }
            return {
                data: payload,
                loadStatus: LOAD_STATUSES.LOADED
            }
        case POPULAR_CATEGORIES_ACTIONS.GET_POPULAR_CATEGORIES_FAILURE:
            return {
                ...state,
                loadStatus: LOAD_STATUSES.FAILURE
            }
        default:
        return state
    }
}