import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./reducers/userReducer";
import logo from "../image/logo_without_background.svg"
import '../style/header.css'

const Header = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    return (
            <header>
                <div id = "container_with_logo">
                    <img src={logo} id = "logo"/>
                    <p><NavLink id = "to_main" to = "/">Chess Kingdom</NavLink></p>
                </div>
                <div id = "container_with_button">
                    {!isAuth &&
                        <p><NavLink id = "to_login" to = "/login">Войти</NavLink></p>
                    }
                    {isAuth && <button onClick={() => dispatch(logout()) }>Выход</button> }
                </div>
            </header>
    )
}
export default Header;
