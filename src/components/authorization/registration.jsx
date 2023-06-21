import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import '../../style/registration.css';
import Input from '../../utils/input/Input';
import {registration} from "../../actions/user";

const RegistrationForm = () => {
    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    return (
        <div className='registration'>
            <div className="registration_header">Регистрация</div>
            <Input value = {nickname} setValue = {setNickname} type = "text" placeholder = "Введите имя"/>
            <Input value = {password} setValue = {setPassword} type = "password" placeholder = "Введите пароль"/>
            <Input value = {email} setValue = {setEmail} type = "email" placeholder = "Введите почту"/>
            <button className="registration_btn" onClick={()=> registration(nickname,password,email)}>Зарегистрироваться</button>
        </div>
    )
}

export default RegistrationForm;
