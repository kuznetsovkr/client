import React from 'react';
import {NavLink} from "react-router-dom";
import "../style/hello.css";
import main_knight from "../image/welcome_knight.svg"

const hello_page = () => {
    return (
        <body id="welcome_page">
            <div className="welcome_container">
                <div id = "welcome_content">
                    <p id = "title">Chess<br/>kingdom</p>
                    <p id = "welcome_text">Привет, друг! Эта платформа для игры в шахматы с друзьями является моим дипломным проектом.<br/>
                        Сайт даёт возможность сыграть в шахматы без регистрации. Приятной игры!
                    </p>
                    <button>
                        <NavLink id = "welcome_button" to = "/main_page">Играть!</NavLink>
                    </button>
                </div>
                <img src={main_knight} alt="Image" className="moving-image"/>
            </div>
        </body>
    )
}
export default hello_page;
