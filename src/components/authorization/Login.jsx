import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import Input from '../../utils/input/Input';
import {login} from "../../actions/user";
import {useDispatch} from "react-redux";


const Login = () => {
    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='authorization'>
            <div className="authorization_header">Авторизация</div>
            <Input value = {nickname} setValue = {setNickname} type = "text" placeholder = "Введите имя"/>
            <Input value = {password} setValue = {setPassword} type = "password" placeholder = "Введите пароль"/>
            <button className="authorization_btn" onClick={()=> dispatch(login(nickname,password))}>Войти</button>
        </div>
    )
}

export default Login;
