import { CART_ACTIONS } from './constants'
import { Cart } from './types'

export const getCart = () => ({ type: CART_ACTIONS.GET_CART })

export const getCartSuccess = (cart: Cart[]) => ({
    type: CART_ACTIONS.GET_CART_SUCCESS,
    payload: cart
})

export const getCartFailure = () => ({ type: CART_ACTIONS.GET_CART_FAILURE })



export const putCart = () => ({ type: CART_ACTIONS.PUT_CART })

export const putCartSuccess = () => ({ type: CART_ACTIONS.PUT_CART_SUCCESS })

export const putCartFailure = () => ({ type: CART_ACTIONS.PUT_CART_FAILURE })



export const deleteCart = () => ({ type: CART_ACTIONS.DELERE_CART })

export const deleteCartSuccess = () => ({ type: CART_ACTIONS.DELERE_CART_SUCCESS })

export const deleteCartFailure = () => ({ type: CART_ACTIONS.DELERE_CART_FAILURE })