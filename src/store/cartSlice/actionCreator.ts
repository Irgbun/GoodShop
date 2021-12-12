import { CART_ACTIONS } from './constants'
import { Cart, Product } from './types'
import { Api } from '../../api'
import { Dispatch } from 'react'

export const getCart = () => ({ type: CART_ACTIONS.GET_CART })

export const getCartSuccess = (cart: Cart[]) => ({
    type: CART_ACTIONS.GET_CART_SUCCESS,
    payload: cart
})



export const putCart = () => ({ type: CART_ACTIONS.PUT_CART })

export const putCartSuccess = () => ({ type: CART_ACTIONS.PUT_CART_SUCCESS })



export const deleteCart = () => ({ type: CART_ACTIONS.DELERE_CART })

export const deleteCartSuccess = () => ({ type: CART_ACTIONS.DELERE_CART_SUCCESS })

export const CartFailure = () => ({ type: CART_ACTIONS.CART_FAILURE })



export const getFetchCart = () => async (dispatch: Dispatch<any>) => {
    dispatch(getCart())
    new Api().getDataCart().then((data) => dispatch(getCartSuccess(data))).catch(() => dispatch(CartFailure()))
}



export const putFetchCart = (product: Product) => async (dispatch: Dispatch<any>) => {
    dispatch(putCart())
    new Api().putDataCart(product)
    .then(() => dispatch(putCartSuccess()))
    .then(() => dispatch(getCart()))
    .then(() => new Api().getDataCart().then((data) => dispatch(getCartSuccess(data))))
    .catch(() => dispatch(CartFailure()))
}



export const deleteFetchCart = (product: Product) => async (dispatch: Dispatch<any>) => {
    dispatch(deleteCart())
    new Api().deleteDataCart(product)
    .then(() => dispatch(deleteCartSuccess()))
    .then(() => dispatch(getCart()))
    .then(() => new Api().getDataCart().then((data) => dispatch(getCartSuccess(data))))
    .catch(() => dispatch(CartFailure()))
}