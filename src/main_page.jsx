import React from 'react';
import './style/chess_board.scss'
import Header from "./header";
import {Chessboard} from "react-chessboard";


const main_page = () => {
    return (
        <div className="chessboard">
            <Header/>
            <div className="board" style={{
                maxWidth: 500,
                maxHeight: 500,
                flexGrow: 1,
            }}>
                <Chessboard
                    position=""
                />
            </div>
        </div>
    )
}
export default main_page;
