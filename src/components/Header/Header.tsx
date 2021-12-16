import { Link } from "react-router-dom";
import { Input, Badge } from 'antd'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { CartSelectors, CartActions } from "../../store";
import css from './Header.module.css'
import cartImg from './cart.jpg'
import LogotipeImg from './headerLogotipe.png'


export const Header = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(CartActions.getFetchCart())
    }, [])

    const cart = useSelector(CartSelectors.getCart)

    const cartOnClick = () => {

    }

    return (
        <div className={css.HeaderWrapper}>
            <div>
                <Link to={'/'}>
                    <img src={LogotipeImg} alt={"Logotipe"} className={css.HeaderLogotipeImg} />
                </Link>
            </div>
            <div>
                <Input />
            </div>
            <div>
                <Link to={'/goods'}>
                    All goods
                </Link>
            </div>
            <div>   
                <Badge count={cart.length !== 0 ? cart.length : null} className={css.HeaderBadge} >
                    <button onClick={cartOnClick} className={css.HeaderButtonCart}>
                        <img src={cartImg} alt={"Cart"} className={css.HeaderCartImg} />
                    </button>
                </Badge>
            </div>
        </div>
    )
}