import css from './CategoriesPage.module.css'
import { useSelector, useDispatch } from "react-redux";
import { PopularCategoriesSelextors, PopularCategoriesActions } from "../../store";
import { useParams, useNavigate } from 'react-router-dom';
import { CardProducts } from "../Card";
import { Row, Col } from 'antd'
import { useEffect } from 'react';

interface popularCategoriesFind {
  category: {
    type: string,
  },
}

interface itemsMap {
    label: string,
    price: number,
    img: string,
    categoryTypeId: string,
    id: string,
    description: string
}

export const CategoriesPage = () => {
  const dispatch = useDispatch()

  

    const popularCategories = useSelector(PopularCategoriesSelextors.getPopularCategories);
    const { type } = useParams()
    const navigate = useNavigate()
    const categories = popularCategories.data.find((el: popularCategoriesFind) => el.category.type === type)

    useEffect(() => {
      dispatch(PopularCategoriesActions.fetchPopularCategories(categories?.category.id))
    }, [])
    
    console.log(popularCategories)

    const clickNavigate = () => {
        return navigate(-1)
    }

    if (categories?.category.type !== type) {
      return (
        <h1>"Категория не найдена, вернуться" <button onClick={clickNavigate}>назад</button></h1>
      )
    }


    return (
      <div>
        <div className={css.CategoriesWrapper}>
          <div className={css.CategoriesTitle}>
            {categories?.category.label}
          </div>
          <Row>
            {categories?.items.map((item: itemsMap) => {
              if (categories.category.id === item.categoryTypeId) {
                return (
                  <Col span={6}>
                    <CardProducts label={item.label} price={item.price} img={item.img} type={item.categoryTypeId} id={item.id} />
                  </Col>
                )
              }
              return null
            })}
          </Row>
        </div>
      </div>
    )
}
