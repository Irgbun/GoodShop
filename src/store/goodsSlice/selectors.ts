import { RootState } from "../store"
import { createSelector } from 'reselect'
import { CategoriesSelectors } from '../categoriesSlice'

export const getGoods = (state: RootState) => state.goods.data.items
export const getGoodsStatus = (state: RootState) => state.goods.loadStatus
export const getGoodsTotal = (state: RootState) => state.goods.data.total

export const getGoodsWithCategory = createSelector(
    [getGoods, CategoriesSelectors.getCategories], (goods, categories) => {
        if(goods === []) {
            return []
        } else {
            const newGoods = goods.map((good) => ({
                ...good,
                category: categories.find((category) => category.id === good.categoryTypeId)?.type
            }))
            return newGoods
        }
    }
)