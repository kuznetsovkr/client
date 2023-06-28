import React from 'react';
import '../style/chess_board.css'
import Header from "./header";
import {Chessboard} from "react-chessboard";
import {NavLink} from "react-router-dom";
import {logout} from "./reducers/userReducer";
import {useDispatch, useSelector} from "react-redux";


const Main_page = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()



    return (
        <div id="main_container">
            <Header/>
            <div className="wrap">
                <div id = "main_content">
                    <div className="board" style={{width:500, height: 500}}>
                        <Chessboard
/*                            customLightSquareStyle = {{ backgroundColor: "#E1E289" }}
                            customDarkSquareStyle = {{ backgroundColor: "#ACD2ED" }}*/
                        />
                    </div>
                    <div id = "with_button">
                        {!isAuth &&
                            <p>Нет аккаунта?</p>
                        }
                        {!isAuth &&
                            <button style={{backgroundColor: '#2288D1',}}>
                                <NavLink className = "text_in_button" to = "/registration">Зарегистрироваться</NavLink>
                            </button>
                        }
                        {!isAuth &&
                            <p>Или</p>
                        }
                        {!isAuth &&
                            <button style={{backgroundColor: '#99AA38',}}>
                                <NavLink className = "text_in_button" to = "/game_not_auth">Сыграть без регистрации</NavLink>
                            </button>
                        }
                        {isAuth && <button>Найти соперника</button> }
                        {isAuth && <button>Создать игру с другом</button> }
                        {isAuth && <button onClick={() => dispatch(logout()) }>Выход</button> }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main_page;
