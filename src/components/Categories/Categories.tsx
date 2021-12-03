import { CardProducts } from "../Card";
import { useSelector } from "react-redux";
import { PopularCategoriesSelextors } from "../../store";
import { Row, Col } from 'antd'
import css from './Categories.module.css'

interface popularCategoriesItemsMap {
  label: string,
  price: number,
  img: string,
  category_type: string,
  id: number,
}

interface popularCategoriesMap {
  label: string,
  type: string
}

export const Categories = () => {
  const popularCategories = useSelector(PopularCategoriesSelextors.getPopularCategories);
  return (
    <div>
      {popularCategories.category.map((el: popularCategoriesMap) => {
        return (
          <div className={css.CatrgoriesWrapper}>
            <div className={css.CategoriesTitle}>
              {el.label}
            </div>
            <Row>
              {popularCategories.items.map((item: popularCategoriesItemsMap) => {
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
  );
};