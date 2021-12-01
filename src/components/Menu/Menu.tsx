import { useEffect } from 'react'
import { useSelector } from "react-redux";
import { Selectors } from "../../store";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { Row, Col } from 'antd';

interface categpriesMap {
  id: number,
  type: string,
  label: string
}

export const MenuCategories = () => {
  const categories = useSelector(Selectors.getCategories);

  useEffect(() => {
    dispatchEvent(action)
  }, [])

  return (
    <Row>
      <Col span={6}>
        <Menu mode="vertical">
          {categories.map((item: categpriesMap) => {
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
