import { CardProducts } from "../Card";
import { useSelector } from "react-redux";
import { Selectors } from "../../store";

interface popularCategoriesMap {
  label: string,
  price: number,
  img: string
}

export const Categories = () => {
  const popularCategories = useSelector(Selectors.getPopularCategories);
  return (
    <div>
      {popularCategories.category.label}
      {popularCategories.items.map((item: popularCategoriesMap) => (
        <CardProducts label={item.label} price={item.price} img={item.img} />
      ))}
    </div>
  );
};
