import { CardProducts } from "../Card";
import { useSelector, useDispatch } from "react-redux";
import { PopularCategoriesSelextors, PopularCategoriesActions } from "../../store";
import { Row, Col } from 'antd'
import css from './Categories.module.css'
import { useEffect } from "react";

interface popularCategoriesItemsMap {
  id: number,
  type: string,
  label: string,
  price: number,
  img: string,
  description: string
}

interface popularCategoriesMap {
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

export const Categories = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(PopularCategoriesActions.fetchPopularCategories())
  })

  const popularCategories = useSelector(PopularCategoriesSelextors.getPopularCategories);
  return (
    <div>
      {popularCategories.data.map((el: popularCategoriesMap) => {
        return (
          <div className={css.CatrgoriesWrapper}>
            <div className={css.CategoriesTitle}>
              {el.categories.label}
            </div>
            <Row>
              {el.items.map((item: popularCategoriesItemsMap) => {
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
  );
};