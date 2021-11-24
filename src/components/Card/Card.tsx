import css from "./card.module.css";
import { Card } from 'antd'

interface CardProdectsProps {
  label: string,
  price: number,
  img: string
}

export const CardProducts: React.FC<CardProdectsProps> = ({ label, price, img }) => {
  return (
    <Card hoverable cover={<img src={img} alt="ProductPhoto" className={css.img} />} >
      <h3>{label}</h3>
      <h2>{price}</h2>
    </Card>
  )
}
