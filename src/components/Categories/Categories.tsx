import { CardProducts } from "../Card";
import { useSelector, useDispatch } from "react-redux";
import { PopularCategoriesSelextors, PopularCategoriesActions } from "../../store";
import { Row, Col } from 'antd'
import css from './Categories.module.css'
import { useEffect } from "react";

interface popularCategoriesItemsMap {
  id: string,
  categoryTypeId: string,
  label: string,
  price: number,
  img: string,
  description: string
}

interface popularCategoriesMap {
  category: {
    id: string,
    type: string,
    label: string
  },
  items: {
      id: string,
      categoryTypeId: string,
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
  }, [])

  const popularCategories = useSelector(PopularCategoriesSelextors.getPopularCategories);
  return (
    <div>
      {popularCategories.map((el: popularCategoriesMap) => {
        return (
          <div className={css.CatrgoriesWrapper}>
            <div className={css.CategoriesTitle}>
              {el.category.label} 
            </div>
            <Row>
              {el.items.map((item: popularCategoriesItemsMap) => {
                if ((el.category.id).toString() === item.categoryTypeId) {
                  return (
                    <Col span={4}>
                      <CardProducts label={item.label} price={item.price} img={item.img} type={item.categoryTypeId} id={item.id} />
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