import css from './CategoriesPage.module.css'
import { useSelector, useDispatch } from "react-redux";
import { MenuCategoriesSelectors, GoodsSelectors, MenuCategoriesActions, GoodsActions } from "../../store";
import { useParams, useNavigate } from 'react-router-dom';
import { CardProducts } from "../Card";
import { Row, Col } from 'antd'
import { useEffect } from 'react';


interface goodsMap {
    label: string,
    price: number,
    img: string,
    categoryTypeId: string,
    id: string,
    description: string
}

export const CategoriesPage = () => {
  const dispatch = useDispatch()

    const { type } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      dispatch(MenuCategoriesActions.fetchMenuCategories(type))
      dispatch(GoodsActions.fetchGoods(type))
    }, [])

    const categories = useSelector(MenuCategoriesSelectors.getCategories);
    const goods = useSelector(GoodsSelectors.getGoods)
    

    const clickNavigate = () => {
        return navigate(-1)
    }

    if (!type) {
      return (
        <h1>"Категория не найдена, вернуться" <button onClick={clickNavigate}>назад</button></h1>
      )
    }

    return (
      <div>
        <div className={css.CategoriesWrapper}>
          <div className={css.CategoriesTitle}>
            {categories.data[0].label}
          </div>
          <Row>
            {goods.data.map((item: goodsMap) => {
              return (
                <Col span={6}>
                  <CardProducts label={item.label} price={item.price} img={item.img} type={item.categoryTypeId} id={item.id} />
                </Col>)})}
          </Row>
        </div> 
      </div>
    )
}
