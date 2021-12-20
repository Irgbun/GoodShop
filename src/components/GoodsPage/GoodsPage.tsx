import css from './GoodsPage.module.css'
import { Table, Select, Slider, Input, Pagination } from 'antd'
import { useSelector, useDispatch } from "react-redux";
import { GoodsSelectors, GoodsActions, CategoriesSelectors, CategoriesActions } from "../../store";
import { useEffect, useState, useCallback } from 'react';
import { debounce } from 'lodash'
import { columnsName } from './constants'
import { useNavigate } from 'react-router-dom';
import { Loader } from '../Loader'



export const GoodsPage = () => {

    const [ inputValue, setInputValue ] = useState("")
    const [ sliderValue, setSliderValue ] = useState<number[]>([])
    const [ selectValue, setSelectValue ] = useState<string[]>()
    const [ paginationPageSize, setPaginationPageSize ] = useState<number>(20)
    const [ paginationTotal ] = useState<number>(220)

    const dispatch = useDispatch()

    const { Option } = Select

    const optionCategories: any = []

    useEffect(() => {
        dispatch(GoodsActions.fetchGoods({ limit: 20, offset: 220 }))
        dispatch(CategoriesActions.fetchCategories({}))
    }, [])

    const navigate = useNavigate()

    const goods = useSelector(GoodsSelectors.getGoodsWithCategory);
    const goodsStatus = useSelector(GoodsSelectors.getGoodsStatus)
    const total = useSelector(GoodsSelectors.getGoodsTotal)
    const categories = useSelector(CategoriesSelectors.getCategories)

    categories.map((item) => {
        optionCategories.push(<Option value={item.id}>{item.label}</Option>)
    })

    const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        setInputValue(newValue)
    }

    const debounceDispatch = useCallback(debounce(( text, minPrice, maxPrice, type, limit, offset?) => {
        dispatch(GoodsActions.fetchGoods({type, text, minPrice, maxPrice}))
    }, 1500), [])

    useEffect(() => {
        debounceDispatch(inputValue, sliderValue[0], sliderValue[1], selectValue, paginationPageSize, total)
    }, [inputValue, sliderValue, selectValue, paginationPageSize, total])

    const sliderOnChange = (value: [number, number]) => {
        setSliderValue(value)
    }

    const selectOnChange = (value: string[]) => {
        setSelectValue(value)
    }

    const paginationOnChange = (page: number, pageSize: number) => {
        setPaginationPageSize(pageSize)
    }

    return (
        <div>
            <div>
                <Input value={inputValue} style={{ width: '200px' }} placeholder='Поиск по товарам' onChange={inputOnChange} />
                <div>
                    Цена:
                    <Slider range defaultValue={[0, 1000]} max={1000} style={{ width: '200px' }} onChange={sliderOnChange} />
                </div>
                <Select
                mode="multiple"
                allowClear
                style={{ width: '200px' }}
                placeholder="Выберите категорию"
                onChange={selectOnChange}
                >
                    {optionCategories}
                </Select>
            </div>
            {goodsStatus === 'loading' && <Loader />}
            {goodsStatus === 'loaded' && (
                <div>
                    <Table 
                    dataSource={goods} 
                    columns={columnsName} 
                    pagination={{
                        defaultCurrent: 1,
                        defaultPageSize: paginationPageSize, 
                        pageSize: 20,
                        pageSizeOptions: ['10', '20', '60', '100'],
                        total: paginationTotal,
                        onChange: paginationOnChange
                    }}
                    onRow={(record) => {
                        return {
                            onClick: () => {
                                navigate(`/product/${record.categoryTypeId}/${record.id}`)
                            }
                        }
                    }} />
                </div>
            )}
        </div>
    )
}