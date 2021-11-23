import { CardProducts } from "../Card";
import { useSelector } from "react-redux";
import { Selectors } from "../../store";
import { useParams, useNavigate } from 'react-router-dom';

interface categoriesFind {
    type: string,
    label: string,
    price: number,
    img: string
}

export const CategoriesPage = () => {
    const popularCategories = useSelector(Selectors.getPopularCategories);
    const { category } = useParams()
    const navigate = useNavigate()

    const clickNavigate = () => {
        return navigate('type')
    }

    return (
        <div>
            {popularCategories.category.find( (el: categoriesFind) => {
                if (el.type === category) {
                    return <CardProducts label={el.label} price={el.price} img={el.img} />
                } else {
                    return <h1>"Категория не найдена, вернуться" <button onClick={clickNavigate}>назад</button></h1>
                }
            } )}
        </div>
    )
}