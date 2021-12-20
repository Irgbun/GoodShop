import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { CategoriesSelectors, CategoriesActions } from "../../store";
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
    dispatch(CategoriesActions.fetchCategories({}))
  }, [])

  const categories = useSelector(CategoriesSelectors.getCategories);
  const status = useSelector(CategoriesSelectors.getCategoriesStatus)
  return (
    <Row>
      <Col span={6}>
        <Menu mode="vertical">
          {status === 'failure' && 'Something went wrong'}
          {status === 'loading' && 'Loading list'}
          {status === 'loaded' && categories.map((item: categpriesMap) => {
            return (
              <Menu.Item key={item.id}>
                <Link to={`/categories/${item.id}`}> {item.label} </Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </Col>
    </Row>
  );
};
