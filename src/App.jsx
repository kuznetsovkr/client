import React, {useEffect} from 'react';
import Hello_page from "./components/hello_page";
import Main_page from "./components/main_page";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Registration from "./components/authorization/registration";
import Game_without_auth from "./components/game/Without_auth";
import Login from "./components/authorization/Login";
import Header from "./components/header";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./actions/user";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(auth())
    })

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hello_page/>} />
                <Route path="/main_page" element={<Main_page/>} />
                <Route path="/registration" element={<Registration/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/game_not_auth" element={<Game_without_auth/>} />
            </Routes>
        </Router>
    );
}

export default App;
