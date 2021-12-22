import { Link } from "react-router-dom";
import { Input, Badge, Dropdown, Menu } from 'antd'
import { useEffect, useState, useCallback } from 'react'
import { debounce } from 'lodash'
import { useSelector, useDispatch } from "react-redux";
import { CartSelectors, CartActions, GoodsActions, GoodsSelectors } from "../../store";
import css from './Header.module.css'
import cartImg from './cart.jpg'
import LogotipeImg from './headerLogotipe.png'


export const Header = () => {
    const dispatch = useDispatch()

    const [ searchValue, setSearchValue ] = useState<string>("")

    const debounceSeatch = useCallback(debounce((text: string) => {
        dispatch(GoodsActions.fetchGoods({ text }))
    }, 1500), [])

    useEffect(() => {
        dispatch(CartActions.getFetchCart())
        debounceSeatch(searchValue)
    }, [searchValue])

    const cart = useSelector(CartSelectors.getCart)
    const goods = useSelector(GoodsSelectors.getGoodsWithCategory)

    const dropdownMenuList = (
        <Menu>
            {goods.map((item) => {
                return (
                    <Menu.Item>
                        <Link to={`/product/${item.categoryTypeId}/${item.id}`}>
                            <div className={css.DropdownMenu}>
                                <img src={item.img} alt="Это товар" />
                                <div>{item.label}</div>
                                <div>{item.price}</div>
                            </div>
                        </Link>
                    </Menu.Item>
                )
            })}
        </Menu>
    )

    const dropdownNothing = (
        <div>Ничего не найдено, попробуйте изменить запрос</div>
    )

    const dropdownMenu = () => {
        if (searchValue === "") {
            return <div></div>
        } else {
            return goods === [] ? dropdownNothing : dropdownMenuList
        }
    }

    const searchOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        setSearchValue(newValue)
    }

    return (
        <div className={css.HeaderWrapper}>
            <div>
                <Link to={'/'}>
                    <img src={LogotipeImg} alt={"Logotipe"} className={css.HeaderLogotipeImg} />
                </Link>
            </div>
            <div>
                <Dropdown overlay={dropdownMenu} >
                    <Input value={searchValue} placeholder="Поиск" style={{ width: '600px' }} onChange={searchOnChange} />
                </Dropdown>
            </div>
            <div>
                <Link to={'/goods'}>
                    All goods
                </Link>
            </div>
            <div>   
                <Badge count={cart.length !== 0 ? cart.length : null} className={css.HeaderBadge} >
                    <button className={css.HeaderButtonCart}>
                        <img src={cartImg} alt={"Cart"} className={css.HeaderCartImg} />
                    </button>
                </Badge>
            </div>
        </div>
    )
}