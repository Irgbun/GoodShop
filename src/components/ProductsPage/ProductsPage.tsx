import css from './ProductPage.module.css'
import { useSelector } from "react-redux";
import { Selectors } from "../../store";
import { useParams, useNavigate } from 'react-router-dom';

interface ProductsPageFind {
    category_type: string,
    id: number,
}

interface popularCategoriesItemsMap {
    img: string,
    label: string,
    price: number,
    description: string,
    id: number
}

export const ProductsPage = () => {
    const popularCategories = useSelector(Selectors.getPopularCategories);
    const { type, id } = useParams()
    const navigate = useNavigate()
    const isTypeTrue = popularCategories.items.find((el: ProductsPageFind) => el.category_type === type)
    const isIdTrue = popularCategories.items.find((el: ProductsPageFind) => (el.id).toString() === id)


    const clickNavigate = () => {
        return navigate(-1)
    }

    const error = <h1>"Продукт не найдена, вернуться" <button onClick={clickNavigate}>назад</button></h1>

    return (
        <div>
            {
                isTypeTrue && isIdTrue &&
                <div>
                    {popularCategories.items.map((item: popularCategoriesItemsMap) => {
                        if ((item.id).toString() === id) {
                            return (
                                <div className={css.ProductPageWrapper}>
                                    <div>
                                        <img src={item.img} alt="ProductPhoto" className={css.img} />
                                    </div>
                                    <div className={css.InfoWrapper}>
                                        <div className={css.label}>
                                            {item.label}
                                        </div>
                                        <div className={css.price}>
                                            {item.price}
                                        </div>
                                        <div className={css.description}>
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        return null
                    })}
                </div>
            }
            {!isTypeTrue && !isIdTrue && error}
        </div>
    )
}