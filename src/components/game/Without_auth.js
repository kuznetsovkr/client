import { useEffect, useState, useCallback } from "react";
import Container from "@mui/material/Container";
import Game from "./Game";
import InitGame from "./InitGame";
import CustomDialog from "../CustomDialog";
import socket from "./socket";
import {Button, TextField} from "@mui/material";
import Header from "../header";


export default function Without_auth() {
    const [username, setUsername] = useState("");
    const [usernameSubmitted, setUsernameSubmitted] = useState(false);

    const [room, setRoom] = useState("");
    const [orientation, setOrientation] = useState("");
    const [players, setPlayers] = useState([]);

    // resets the states responsible for initializing a game
    const cleanup = useCallback(() => {
        setRoom("");
        setOrientation("");
        setPlayers("");
    }, []);

    useEffect(() => {
        // const username = prompt("Username");
        // setUsername(username);
        // socket.emit("username", username);

        socket.on("opponentJoined", (roomData) => {
            console.log("roomData", roomData)
            setPlayers(roomData.players);
        });
    }, []);

    return (
        <Container style={{padding: 0}}>
            <Header/>
            <CustomDialog
                open={!usernameSubmitted}
                handleClose={() => setUsernameSubmitted(true)}
                title="Введите своё имя"

                handleContinue={() => {
                    if (!username) return;
                    socket.emit("username", username);
                    setUsernameSubmitted(true);
                }}
            >
                <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    label="Имя"
                    name="username1"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </CustomDialog>
            {room ? (

                <Game
                    room={room}
                    orientation={orientation}
                    username={username}
                    players={players}
                    // the cleanup function will be used by Game to reset the state when a game is over
                    cleanup={cleanup}
                />
            ) : (
                <InitGame
                    setRoom={setRoom}
                    setOrientation={setOrientation}
                    setPlayers={setPlayers}
                />
            )}
        </Container>
    );
}
