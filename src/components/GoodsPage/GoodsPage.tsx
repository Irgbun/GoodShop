import { Table, Select, Slider, Input } from 'antd'
import { useSelector, useDispatch } from "react-redux";
import { GoodsSelectors, GoodsActions } from "../../store";
import { useEffect } from 'react';
import debounce from 'lodash'

export const GoodsPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GoodsActions.fetchGoods({}))
    }, [])

    const goods = useSelector(GoodsSelectors.getGoods);
    const { Column } = Table
    //const { Option } = Select

    const InputOnChange = (event) => {
        
    }


    return (
        <div>
            <div>
                <Input value={""} style={{ width: '200px' }} placeholder='Напиши категорию' />
                <Slider range defaultValue={[0, 1000]} max={1000} style={{ width: '200px' }} />
                <Select
                mode="multiple"
                allowClear
                style={{ width: '200px' }}
                placeholder="Выберите категорию"
                >
                    {}
                </Select>
            </div>
            <div>
                <Table dataSource={goods}>
                    <Column 
                        title="Название" 
                        dataIndex="label" 
                        key="label"
                        />
                    <Column 
                        title="Цена" 
                        dataIndex="price" 
                        key="price"
                        />
                </Table>
            </div>
        </div>

    )
}

// render={goods.map((item) => {
//     return item.label
// })}