import { RootState } from "../store"

export const getGoods = (state: RootState) => state.goods.data
export const getGoodsStatus = (state: RootState) => state.goods.loadStatus