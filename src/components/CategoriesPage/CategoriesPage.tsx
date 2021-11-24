import { Categories } from "../Categories";
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
    const { type } = useParams()
    const navigate = useNavigate()
    const isTypeTrue = popularCategories.category.find((el: categoriesFind) => el.type === type)
    
    const clickNavigate = () => {
        return navigate('/')
    }

    const error = <h1>"Категория не найдена, вернуться" <button onClick={clickNavigate}>назад</button></h1>

    return (
        <div>
            {isTypeTrue && <Categories  />}
            {!isTypeTrue && error}
        </div>
    )
}
