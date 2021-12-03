import { GOODS_ACTIONS, LOAD_STATUSES } from './constants'
import { Action } from "redux";
import { State } from './types'


const INITIAL_STATE: State = {
    loadStatus: LOAD_STATUSES.UNKNOWN,
    data: []
}

export function goodsReducer(state = INITIAL_STATE, action: Action<GOODS_ACTIONS>) {
    switch(action.type) {
        case GOODS_ACTIONS.GET_GOODS:
            return {
                ...state,
                loadStatus: LOAD_STATUSES.LOADING
            }
        case GOODS_ACTIONS.GET_GOODS_SUCCESS:
            const { payload } = action as {
                type: GOODS_ACTIONS.GET_GOODS_SUCCESS,
                payload: State['data']
            }
            return {
                data: payload,
                loadStatus: LOAD_STATUSES.LOADED
            }
        case GOODS_ACTIONS.GET_GOODS_FAILURE:
            return {
                ...state,
                loadStatus: LOAD_STATUSES.FAILURE
            }
        default:
            return state
    }
}