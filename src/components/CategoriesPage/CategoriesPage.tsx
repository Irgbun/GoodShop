import css from './CategoriesPage.module.css'
import { useSelector, useDispatch } from "react-redux";
import { PopularCategoriesSelextors, PopularCategoriesActions } from "../../store";
import { useParams, useNavigate } from 'react-router-dom';
import { CardProducts } from "../Card";
import { Row, Col } from 'antd'
import { useEffect } from 'react';

interface popularCategoriesFind {
  categories: {
    type: string
  },
}

interface popularCategoryMap {
  categories: {
    id: number,
    type: string,
    label: string
  },
  items: {
      id: number,
      type: string,
      label: string,
      price: number,
      img: string,
      description: string
  }[]
}

interface itemsMap {
    label: string,
    price: number,
    img: string,
    type: string,
    id: number,
    description: string
}

export const CategoriesPage = () => {
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(PopularCategoriesActions.fetchPopularCategories())
    })
  

    const popularCategories = useSelector(PopularCategoriesSelextors.getPopularCategories);
    const { type } = useParams()
    const navigate = useNavigate()
    const categories = popularCategories.data.find((el: popularCategoriesFind) => el.categories.type === type)


    const clickNavigate = () => {
        return navigate(-1)
    }

    if (!categories) {
      return (
        <h1>"Категория не найдена, вернуться" <button onClick={clickNavigate}>назад</button></h1>
      )
    }


    return (
                <div>
                  {popularCategories.data.map((el: popularCategoryMap) => {
                        return (
                            <div className={css.CategoriesWrapper}>
                              <div className={css.CategoriesTitle}>
                                {el.categories.label}
                              </div>
                              <Row>
                                {el.items.map((item: itemsMap) => {
                                  if (el.categories.type === item.type) {
                                    return (
                                      <Col span={6}>
                                        <CardProducts label={item.label} price={item.price} img={item.img} type={item.type} id={item.id} />
                                      </Col>
                                    )
                                  } 
                                  return null
                                })}
                              </Row>
                            </div>
                          )
                  })}
                </div>
    )
}
