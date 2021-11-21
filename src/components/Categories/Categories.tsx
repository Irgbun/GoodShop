import { Card } from "../Card";

export const Categories = ({ goodCategories }) => {
  return (
    <div>
      {goodCategories.category.label}
      {goodCategories.items.map((item) => (
        <Card label={item.label} price={item.price} img={item.img} />
      ))}
    </div>
  );
};
