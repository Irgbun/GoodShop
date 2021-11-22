import { useSelector } from "react-redux";
import { Selectors } from "../../store";
import { Link } from "react-router-dom";
import { Menu } from "antd";

interface categpriesMap {
  id: number,
  type: string,
  label: string
}

export const MenuCategories = () => {
  const categories = useSelector(Selectors.getCategories);
  return (
    <Menu>
      {categories.map((item: categpriesMap) => {
        return (
          <Menu.Item key={item.id}>
            <Link to={`${item.type}`}> {item.label} </Link>
          </Menu.Item>
        )
      })}
    </Menu>
  );
};
