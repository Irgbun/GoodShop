import css from './CategoriesPage.module.css'
import { useSelector } from "react-redux";
import { Selectors } from "../../store";
import { useParams, useNavigate } from 'react-router-dom';
import { CardProducts } from "../Card";
import { Row, Col } from 'antd'

interface categoriesFind {
    type: string,
}

interface categoryMap {
    label: string,
    type: string
}

interface itemsMap {
    label: string,
    price: number,
    img: string,
    category_type: string,
    id: number,
}

export const CategoriesPage = () => {
    const popularCategories = useSelector(Selectors.getPopularCategories);
    const { type } = useParams()
    const navigate = useNavigate()
    const categories = popularCategories.category.find((el: categoriesFind) => el.type === type)
    
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
                  {popularCategories.category.map((el: categoryMap) => {
                        return (
                            <div className={css.CategoriesWrapper}>
                              <div className={css.CategoriesTitle}>
                                {el.label}
                              </div>
                              <Row>
                                {popularCategories.items.map((item: itemsMap) => {
                                  if (el.type === item.category_type) {
                                    return (
                                      <Col span={6}>
                                        <CardProducts label={item.label} price={item.price} img={item.img} type={item.category_type} id={item.id} />
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
