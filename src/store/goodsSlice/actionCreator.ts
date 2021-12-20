import { GOODS_ACTIONS } from './constants'
import { Goods, GetDataGoods } from './types'
import { Api } from '../../api'
import { Dispatch } from 'react'

export const getGoods = () => ({ type: GOODS_ACTIONS.GET_GOODS })

export const getGoodsSuccess = (goods: Goods[]) => ({
    type: GOODS_ACTIONS.GET_GOODS_SUCCESS,
    payload: goods
})

export const getGoodsFailure = () => ({ type: GOODS_ACTIONS.GET_GOODS_FAILURE })



export const fetchGoods = ({ id, type, text, minPrice, maxPrice }: GetDataGoods) => async(dispatch: Dispatch<any>) => {
    dispatch(getGoods())
    new Api().getDataGoods({ id, type, text, minPrice, maxPrice }).then((data) => dispatch(getGoodsSuccess(data.items))).catch(() => dispatch(getGoodsFailure()))
}