import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { MenuCategoriesSelectors, MenuCategoriesActions } from "../../store";
import { Link } from "react-router-dom";
import { Menu, Row, Col } from "antd";

interface categpriesMap {
  id: string,
  type: string,
  label: string
}

export const MenuCategories = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(MenuCategoriesActions.fetchMenuCategories())
  }, [])

  const categories = useSelector(MenuCategoriesSelectors.getCategories);
  return (
    <Row>
      <Col span={6}>
        <Menu mode="vertical">
          {categories.loadStatus === 'failure' && 'Something went wrong'}
          {categories.loadStatus === 'loading' && 'Loading list'}
          {categories.loadStatus === 'loaded' && categories.data.map((item: categpriesMap) => {
            return (
              <Menu.Item key={item.id}>
                <Link to={`${item.type}`}> {item.label} </Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </Col>
    </Row>
  );
};
