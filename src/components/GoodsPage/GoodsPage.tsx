import css from './GoodsPage.module.css'
import { Table, Select, Slider, Input } from 'antd'
import { useSelector, useDispatch } from "react-redux";
import { GoodsSelectors, GoodsActions, CategoriesSelectors, CategoriesActions, LOAD_STATUSES } from "../../store";
import { useEffect, useState, useCallback } from 'react';
import { debounce } from 'lodash'
import { columnsName, Filters, INITIAL_FILTERS } from './constants'
import { useNavigate } from 'react-router-dom';

export const GoodsPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ filters, setFilters ] = useState<Filters>(INITIAL_FILTERS)

    const updateFilters = (nextFilters: Partial<Filters>) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...nextFilters
        }))
    }

    const paginationHandler = (page = 1, limit = INITIAL_FILTERS.limit) => {
        updateFilters({ limit, offset: (page - 1) * limit })
    }

    const goods = useSelector(GoodsSelectors.getGoodsWithCategory);
    const totalGoods = useSelector(GoodsSelectors.getGoodsTotal)
    const goodsLoadStatus = useSelector(GoodsSelectors.getGoodsStatus)
    const categories = useSelector(CategoriesSelectors.getCategories)

    const categoriesOptions = categories.map(({ id, label }) => ({
        value: id,
        label
    }))

    const getGoods = (filters: Filters) => {
        dispatch(GoodsActions.fetchGoods(filters))
    }

    const getGoodsDebounce = useCallback(debounce(getGoods, 1500), [])

    useEffect(() => {
        dispatch(CategoriesActions.fetchCategories({}))
    }, [])

    useEffect(() => {
        getGoodsDebounce(filters)
    }, [getGoodsDebounce, filters])

    return (
        <div>
            <div className={css.SearchParamsWrapper}>
                <Input 
                    value={filters.text} 
                    style={{ width: '400px' }} 
                    placeholder='Поиск по товарам' 
                    onChange={({ target: { value: text } }) => {
                        updateFilters({ text })
                    }} />
                <div>
                    Цена:
                    <Slider 
                        range
                        min={filters.minPrice} 
                        max={filters.maxPrice} 
                        value={[filters.minPrice, filters.maxPrice]}
                        style={{ width: '400px' }} 
                        onChange={([minPrice, maxPrice]) => {
                            updateFilters({ minPrice, maxPrice })
                        }} 
                    />
                </div>
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '400px' }}
                    placeholder="Выберите категорию"
                    onChange={(favouriteCategories: string[] = []) => {
                        updateFilters({ favouriteCategories })
                    }}
                    options={categoriesOptions}
                    value={filters.favouriteCategories}
                />
            </div>
            <div>
                <Table 
                    rowKey="id"
                    loading={goodsLoadStatus === LOAD_STATUSES.LOADING}
                    dataSource={goods} 
                    columns={columnsName} 
                    pagination={{
                        current: filters.offset / filters.limit + 1,
                        pageSize: filters.limit,
                        pageSizeOptions: ['10', '20', '60', '100'],
                        total: totalGoods,
                        onChange: paginationHandler
                    }}
                    onRow={(record) => {
                        return {
                            onClick: () => {
                                navigate(`/product/${record.categoryTypeId}/${record.id}`)
                            }
                        }
                    }} 
                />
            </div>
            )
        </div>
    )
}