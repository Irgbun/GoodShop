import { CardProducts } from "../Card";
import { useSelector } from "react-redux";
import { Selectors } from "../../store";

interface popularCategoriesMapItems {
  label: string,
  price: number,
  img: string
}

interface popularCategoriesMapCategory {
  label: string,
}

export const Categories = () => {
  const popularCategories = useSelector(Selectors.getPopularCategories);
  return (
    <div>
      {popularCategories.category.map( (item: popularCategoriesMapCategory) => item.label)}
      {popularCategories.items.map((item: popularCategoriesMapItems) => (
        <CardProducts label={item.label} price={item.price} img={item.img} />
      ))}
    </div>
  );
};
