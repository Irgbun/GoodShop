import css from './ProductPage.module.css'
import { useSelector, useDispatch } from "react-redux";
import { GoodsSelectors, GoodsActions } from "../../store";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface GoodsFind {
    categoryTypeId: string,
    id: string,
}

export const ProductsPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GoodsActions.fetchGoods)
    }, [])

    const goods = useSelector(GoodsSelectors.getGoods);
    const { type, id } = useParams()
    const navigate = useNavigate()
    const good = goods.data.find((el: GoodsFind) => el.categoryTypeId === type && (el.id).toString() === id)


    const clickNavigate = () => {
        return navigate(-1)
    }

    if (!good) {
        return <h1>"Продукт не найдена, вернуться" <button onClick={clickNavigate}>назад</button></h1>
    }

    return (
        <div className={css.ProductPageWrapper}>
                                    <div>
                                        <img src={good.img} alt="ProductPhoto" className={css.img} />
                                    </div>
                                    <div className={css.InfoWrapper}>
                                        <div className={css.label}>
                                            {good.label}
                                        </div>
                                        <div className={css.price}>
                                            {good.price}
                                        </div>
                                        <div className={css.description}>
                                            {good.description}
                                        </div>
                                    </div>
                                </div>
    )
}