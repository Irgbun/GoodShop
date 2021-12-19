import { RootState } from "../store"
import { createSelector } from 'reselect'
import { CategoriesSelectors } from '../categoriesSlice'

export const getGoods = (state: RootState) => state.goods.data
export const getGoodsStatus = (state: RootState) => state.goods.loadStatus

export const getGoodsWithCategory = createSelector(
    [getGoods, CategoriesSelectors.getCategories], (goods, categories) => {
        const newGoods = goods.map((good) => ({
            ...good,
            category: categories.find((category) => category.id === good.categoryTypeId)?.type
        }))
        return newGoods
    }
)