import css from "./card.module.css";

export const Card = ({ label, price, img }) => {
  return (
    <div className={css.cardWrapper}>
      <img src={img} alt="картинка" />
      {label}
      {price}
    </div>
  );
};