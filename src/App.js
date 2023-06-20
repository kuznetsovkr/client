import React from 'react';
import Hello_page from "./hello_page";
import Main_page from "./main_page";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Registration from "./registration";
import Game_without_auth from  "./Without_auth";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hello_page/>} />
                <Route path="/main_page" element={<Main_page/>} />
                <Route path="/registration" element={<Registration/>} />
                <Route path="/game_not_auth" element={<Game_without_auth/>} />
            </Routes>
        </Router>
    );
}

export default App;
