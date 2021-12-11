import css from './ProductPage.module.css'
import { useSelector, useDispatch } from "react-redux";
import { GoodsSelectors, GoodsActions, CartActions, CartSelectors } from "../../store";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from 'antd'

interface GoodsFind {
    categoryTypeId: string,
    id: string,
}

export const ProductsPage = () => {
    const dispatch = useDispatch()


    const { type, id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(GoodsActions.fetchGoods(id, type))
    }, [])



    const goods = useSelector(GoodsSelectors.getGoods);
    const cart = useSelector(CartSelectors.getCart)
    const clickNavigate = () => {
        return navigate(-1)
    }

    const addProdToCart = () => {
        const good = goods.data[0]
        if(cart.data.map((item) => item === good)) {
            dispatch(CartActions.putFetchCart(good))
        }
        dispatch(CartActions.deleteCart(good))
    }

    if (!id || !type) {
        return <h1>"Продукт не найдена, вернуться" <button onClick={clickNavigate}>назад</button></h1>
    } else if (goods.loadStatus === 'loaded') {
        console.log(goods.data[0])
        return (
            <div className={css.ProductWrapper}>
                <div className={css.ProductInfoWrapper}>
                    <div>
                        <img src={goods.data[0].img} alt="ProductPhoto" className={css.img} />
                    </div>
                    <div className={css.InfoWrapper}>
                        <div className={css.label}>
                            {goods?.data[0].label}
                        </div>
                        <div className={css.price}>
                            {goods.data[0].price}
                        </div>
                        <div className={css.description}>
                            {goods.data[0].description}
                        </div>
                    </div>
                </div>
                <div>
                    <Button onClick={addProdToCart}> Добавить в корзину </Button>
                </div>
            </div>
        )  
    }

    return (
        <div>
            Страница продукта загружается. Ожидайте.
        </div>
    )
}