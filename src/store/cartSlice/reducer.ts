import { CART_ACTIONS, LOAD_STATUSES } from './constants'
import { Action } from 'redux'
import { State } from './types'


const INITIAL_STATE: State = {
    loadStatus: LOAD_STATUSES.UNKNOWN,
    data: []
}

export function cartReducer(state = INITIAL_STATE, action: Action<CART_ACTIONS>) {
    switch(action.type) {
        case CART_ACTIONS.GET_CART:
            return {
                ...state,
                loadStatus: LOAD_STATUSES.LOADING
            }
        case CART_ACTIONS.GET_CART_SUCCESS:
            const { payload } = action as {
                type: CART_ACTIONS.GET_CART_SUCCESS,
                payload: State['data']
            }
            return {
                data: payload,
                loadStatus: LOAD_STATUSES.LOADED
            }
        case CART_ACTIONS.GET_CART_FAILURE:
            return {
                ...state,
                loadStatus: LOAD_STATUSES.FAILURE
            }
        case CART_ACTIONS.PUT_CART:
            return {
                ...state,
                loadStatus: LOAD_STATUSES.LOADING
            }
        case CART_ACTIONS.PUT_CART_SUCCESS:
            return {
               ...state,
               loadStatus: LOAD_STATUSES.LOADED
            }
        case CART_ACTIONS.PUT_CART_FAILURE:
            return {
                ...state,
                loadStatus: LOAD_STATUSES.FAILURE
            }
        case CART_ACTIONS.DELERE_CART:
            return {
                ...state,
                loadStatus: LOAD_STATUSES.LOADING
            }
        case CART_ACTIONS.DELERE_CART_SUCCESS:
            return {
                ...state,
                loadStatus: LOAD_STATUSES.LOADED
            }
        case CART_ACTIONS.DELERE_CART_FAILURE:
            return {
                ...state,
                loadStatus: LOAD_STATUSES.FAILURE
            }
        default:
            return state
    }
}
