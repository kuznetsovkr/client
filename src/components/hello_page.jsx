import React from 'react';
import {NavLink} from "react-router-dom";
import "../style/hello.css";

const hello_page = () => {
    return (
    <html>
        <body>
            <div className="container">
                <p id = "title">Chess<br/>kingdom</p>
                <p id = "welcome_text">Привет, друг! Эта платформа для игры в шахматы с друзьями является моим дипломным проектом.<br/>
                    Сервис даёт возможность сыграть в шахматы без регистрации на сайте. Приятной игры!
                </p>
                <button>
                    <NavLink to = "/main_page">Играть!</NavLink>
                </button>
            </div>
        </body>
    </html>
    )
}
export default hello_page;
