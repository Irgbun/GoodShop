import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { MenuCategoriesSelectors, MenuCategoriesActions } from "../../store";
import { Link } from "react-router-dom";
import { Menu, Row, Col } from "antd";

interface categpriesMap {
  id: number,
  type: string,
  label: string
}

export const MenuCategories = () => {
  const categories = useSelector(MenuCategoriesSelectors.getCategories);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(MenuCategoriesActions.fetchMenuCategories())
  }, [])

  return (
    <Row>
      <Col span={6}>
        <Menu mode="vertical">
          {categories.loadStatus && categories.data.map((item: categpriesMap) => {
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
