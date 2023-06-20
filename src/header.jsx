import React from 'react';
import {NavLink} from "react-router-dom";

const header = () => {
    return (
            <header>
                <button>
                    <NavLink to = "/">На главную</NavLink>
                </button>
                <button>
                    <NavLink to = "/registration">Зарегистрироваться</NavLink>
                </button>
                <button>
                    <NavLink to = "/game_not_auth">Сыграть без регистрации</NavLink>
                </button>
            </header>
    )
}
export default header;
