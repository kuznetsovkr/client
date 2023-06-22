import React, { useState } from 'react';
import '../../style/authorization.css';
import Input from '../../utils/input/Input';
import {login, registration} from "../../actions/user";
import Header from "../header";
import {NavLink} from "react-router-dom";

const RegistrationForm = () => {
    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    return (
    <div className="container">
        <div className="wrap">
            <Header/>
            <div className='authorization_form'>
                <div className="authorization_header">Регистрация</div>
                <div className='authorization_body'>
                    <Input value = {nickname} setValue = {setNickname} type = "text" placeholder = "Введите имя"/>
                    <Input value = {password} setValue = {setPassword} type = "password" placeholder = "Введите пароль"/>
                    <Input value = {email} setValue = {setEmail} type = "email" placeholder = "Введите почту"/>
                    <button className="registration_btn" onClick={()=> registration(nickname,password,email)}>Зарегистрироваться</button>
                    <NavLink  to = "/login">Есть аккаунт? Войдите</NavLink>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RegistrationForm;
