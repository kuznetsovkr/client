import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./reducers/userReducer";

const Header = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    return (
            <header>
                <button>
                    <NavLink to = "/">На главную</NavLink>
                </button>
                {!isAuth &&
                    <button><NavLink to = "/registration">Зарегистрироваться</NavLink></button>
                }
                {!isAuth &&
                    <button><NavLink to = "/login">Войти</NavLink></button>
                }
                {!isAuth &&
                    <button><NavLink to = "/game_not_auth">Сыграть без регистрации</NavLink></button>
                }
                {isAuth && <button onClick={() => dispatch(logout()) }>Выход</button> }
            </header>
    )
}
export default Header;
