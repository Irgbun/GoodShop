import { Table } from 'antd'
import { useSelector, useDispatch } from "react-redux";
import { GoodsSelectors, GoodsActions } from "../../store";
import { useEffect } from 'react';

export const GoodsPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GoodsActions.fetchGoods({}))
    }, [])

    const goods = useSelector(GoodsSelectors.getGoods);
    const { Column } = Table


    return (
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
    )
}

// render={goods.map((item) => {
//     return item.label
// })}