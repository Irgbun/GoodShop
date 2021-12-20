import css from './GoodsPage.module.css'
import { Table, Select, Slider, Input } from 'antd'
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
    const dispatch = useDispatch()
    const { Option } = Select
    const optionCategories: any = []

    useEffect(() => {
        dispatch(GoodsActions.fetchGoods({}))
        dispatch(CategoriesActions.fetchCategories({}))
    }, [])

    const navigate = useNavigate()

    const goods = useSelector(GoodsSelectors.getGoodsWithCategory);
    const goodsStatus = useSelector(GoodsSelectors.getGoodsStatus)
    const categories = useSelector(CategoriesSelectors.getCategories)

    categories.map((item) => {
        optionCategories.push(<Option value={item.id}>{item.label}</Option>)
    })

    const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        setInputValue(newValue)
    }

    const debounceDispatch = useCallback(debounce(( text, minPrice, maxPrice, type) => {
        dispatch(GoodsActions.fetchGoods({type, text, minPrice, maxPrice}))
    }, 1500), [])

    useEffect(() => {
        debounceDispatch(inputValue, sliderValue[0], sliderValue[1], selectValue)
    }, [inputValue, sliderValue, selectValue])

    const sliderOnChange = (value: [number, number]) => {
        setSliderValue(value)
    }

    const selectOnChange = (value: string[]) => {
        setSelectValue(value)
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
                    <Table dataSource={goods} columns={columnsName} pagination={false} onRow={(record, rowIndex) => {
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