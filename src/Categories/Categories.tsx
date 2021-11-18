import { Card } from "../Card";

export const Categories = ({ goodCategories }) => {
  const categoriesMap = [goodCategories]
  return (
    <div>
      {categoriesMap.map( (item) => {
        return(
          <h3>item.Categories[0].label</h3>
          <div>item.items.map( (el) => <Card card={el} /> )</div>
        )
      })}
      <Card />
    </div>
  );
};
