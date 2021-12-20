import { GOODS_ACTIONS } from './constants'
import { GoodsWithTotal, GetDataGoods } from './types'
import { Api } from '../../api'
import { Dispatch } from 'react'

export const getGoods = () => ({ type: GOODS_ACTIONS.GET_GOODS })

export const getGoodsSuccess = (goods: GoodsWithTotal) => ({
    type: GOODS_ACTIONS.GET_GOODS_SUCCESS,
    payload: goods
})

export const getGoodsFailure = () => ({ type: GOODS_ACTIONS.GET_GOODS_FAILURE })



export const fetchGoods = ({ id, type, text, minPrice, maxPrice, limit, offset }: GetDataGoods) => async(dispatch: Dispatch<any>) => {
    dispatch(getGoods())
    new Api().getDataGoods({ id, type, text, minPrice, maxPrice, limit, offset }).then((data) => dispatch(getGoodsSuccess(data))).catch(() => dispatch(getGoodsFailure()))
}