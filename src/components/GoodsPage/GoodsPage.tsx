import css from './GoodsPage.module.css'
import { Table, Select, Slider, Input } from 'antd'
import { useSelector, useDispatch } from "react-redux";
import { GoodsSelectors, GoodsActions, CategoriesSelectors, CategoriesActions } from "../../store";
import { useEffect, useState } from 'react';
import { debounce, values } from 'lodash'
import { columnsName } from './constants'
import { useNavigate } from 'react-router-dom';



export const GoodsPage = () => {

    const [ inputValue, setInputValue ] = useState("")
    const [ sliderValue, setSliderValue ] = useState()
    const dispatch = useDispatch()
    const { Option } = Select
    const optionCategories: any = []

    useEffect(() => {
        dispatch(GoodsActions.fetchGoods({}))
        dispatch(CategoriesActions.fetchCategories({}))
    }, [])

    const navigate = useNavigate()

    const goods = useSelector(GoodsSelectors.getGoodsWithCategory);
    const categories = useSelector(CategoriesSelectors.getCategories)

    categories.map((item) => {
        optionCategories.push(<Option value={item.id}>{item.label}</Option>)
    })

    const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        setInputValue(newValue)
    }

    const inputOnChangeDebounce = debounce((text) => {
        dispatch(GoodsActions.fetchGoods({text}))
    }, 1500)

    useEffect(() => {
        inputOnChangeDebounce(inputValue)
    }, [inputValue])

    const sliderOnChange = (value: [number, number]) => {
        setSliderValue(value)
    }

    return (
        <div>
            <div>
                <Input value={inputValue} style={{ width: '200px' }} placeholder='Поиск по товарам' onChange={inputOnChange} />
                <div>
                    Цена:
                    <Slider range value={sliderValue} defaultValue={[0, 1000]} max={1000} style={{ width: '200px' }} onChange={sliderOnChange} />
                </div>
                <Select
                mode="multiple"
                allowClear
                style={{ width: '200px' }}
                placeholder="Выберите категорию"
                >
                    {optionCategories}
                </Select>
            </div>
            <div>
                <Table dataSource={goods} columns={columnsName} pagination={false} onRow={(record, rowIndex) => {
                    return {
                        onClick: () => {
                            navigate(`/product/${record.categoryTypeId}/${record.id}`)
                        }
                    }
                }} />
            </div>
        </div>

    )
}