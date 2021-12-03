import css from './ProductPage.module.css'
import { useSelector } from "react-redux";
import { PopularCategoriesSelextors, GoodsActions } from "../../store";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface ProductsPageFind {
    category_type: string,
    id: number,
}

export const ProductsPage = () => {

    useEffect(() => {
        dispatch(GoodsActions.fetchGoods)
    }, [])

    const popularCategories = useSelector(PopularCategoriesSelextors.getPopularCategories);
    const { type, id } = useParams()
    const navigate = useNavigate()
    const item = popularCategories.items.find((el: ProductsPageFind) => el.category_type === type && (el.id).toString() === id)


    const clickNavigate = () => {
        return navigate(-1)
    }

    if (!item) {
        return <h1>"Продукт не найдена, вернуться" <button onClick={clickNavigate}>назад</button></h1>
    }

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