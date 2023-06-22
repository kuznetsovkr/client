import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import Input from '../../utils/input/Input';
import {login} from "../../actions/user";
import {useDispatch} from "react-redux";
import '../../style/authorization.css'
import Header from "../header";

const Login = () => {
    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className="container">
            <div className="wrap">
                <Header/>
                <div className='authorization_form'>
                    <div className="authorization_header">Авторизация</div>
                    <div className='authorization_body'>
                        <Input value = {nickname} setValue = {setNickname} type = "text" placeholder = "Введите имя"/>
                        <Input value = {password} setValue = {setPassword} type = "password" placeholder = "Введите пароль"/>
                        <button className="authorization_btn" onClick={()=> dispatch(login(nickname,password))}>Войти</button>
                        <NavLink  to = "/registration">Нет аккаунта? Зарегистрируйтесь</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
