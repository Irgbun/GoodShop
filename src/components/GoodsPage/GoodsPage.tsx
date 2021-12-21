import css from './GoodsPage.module.css'
import { Table, Select, Slider, Input, Pagination } from 'antd'
import { useSelector, useDispatch } from "react-redux";
import { GoodsSelectors, GoodsActions, CategoriesSelectors, CategoriesActions } from "../../store";
import { useEffect, useState, useCallback } from 'react';
import { debounce, values } from 'lodash'
import { columnsName } from './constants'
import { useNavigate } from 'react-router-dom';
import { Loader } from '../Loader'

interface State {
    text?: string,
    minPrice?: number,
    maxPrice?: number,
    category?: string[],
    limit?: number,
    offset?: number
}

interface DebounceFunction {
    text?: string,
    minPrice?: number,
    maxPrice?: number,
    category?: string[],
    limit?: number,
    offset?: number
}

export const GoodsPage = () => {

    const [ vaLue, setVaLue ] = useState<State>({ text: "", minPrice: 0, maxPrice: 1000, category: [], limit: 20, offset: 220 })

    const [ inputValue, setInputValue ] = useState("")
    const [ sliderValue, setSliderValue ] = useState<number[]>([])
    const [ selectValue, setSelectValue ] = useState<string[]>()
    const [ paginationPageSize, setPaginationPageSize ] = useState<number>(20)
    const [ paginationTotal ] = useState<number>(220)

    const dispatch = useDispatch()

    const { Option } = Select

    const optionCategories: any = []

    const debounceDispatch = useCallback(debounce(( {text, minPrice, maxPrice, category, limit, offset}: DebounceFunction) => {
        dispatch(GoodsActions.fetchGoods({type: category, text, minPrice, maxPrice, limit, offset}))
    }, 1500), [])

    useEffect(() => {
        dispatch(CategoriesActions.fetchCategories({}))
        debounceDispatch(vaLue)
    }, [vaLue])

    const navigate = useNavigate()

    const goods = useSelector(GoodsSelectors.getGoodsWithCategory);
    const goodsStatus = useSelector(GoodsSelectors.getGoodsStatus)
    const categories = useSelector(CategoriesSelectors.getCategories)

    categories.map((item) => {
        optionCategories.push(<Option value={item.id}>{item.label}</Option>)
    })

    const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        setVaLue({ text: newValue })
    }

    const sliderOnChange = (value: [number, number]) => {
        setVaLue({ minPrice: value[0], maxPrice: value[1] })
    }

    const selectOnChange = (value: string[]) => {
        setVaLue({ category: value })
    }

    const paginationOnChange = (page: number, pageSize?: number) => {
        if(pageSize !== undefined) {
            setVaLue({ limit: pageSize })
        }
    }

    return (
        <div>
            <div>
                <Input value={vaLue.text} style={{ width: '200px' }} placeholder='Поиск по товарам' onChange={inputOnChange} />
                <div>
                    Цена:
                    <Slider 
                    range 
                    defaultValue={[0, 1000]} 
                    min={vaLue.minPrice} 
                    max={vaLue.maxPrice} 
                    style={{ width: '200px' }} 
                    onChange={sliderOnChange} 
                    />
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
                        defaultPageSize: vaLue.limit, 
                        pageSize: vaLue.limit,
                        pageSizeOptions: ['10', '20', '60', '100'],
                        total: vaLue.offset,
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