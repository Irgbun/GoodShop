import css from "./card.module.css";
import { Card } from 'antd'
import { Link } from "react-router-dom";

interface CardProdectsProps {
  label: string,
  price: number,
  img: string,
  type: string,
  id: string
}

export const CardProducts: React.FC<CardProdectsProps> = ({ label, price, img, type, id }) => {
  return (
    <Link to={`/product/${id}/${id}`}>
      <Card hoverable cover={<img src={img} alt="ProductPhoto" className={css.img} />} >
        <h3>{label}</h3>
        <h2>{price}</h2>
      </Card>
    </Link>
  )
}
