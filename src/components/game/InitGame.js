import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import CustomDialog from "../CustomDialog";
import socket from "./socket";

export default function InitGame({ setRoom, setOrientation, setPlayers }) {
  const [roomDialogOpen, setRoomDialogOpen] = useState(false);
  const [roomInput, setRoomInput] = useState(""); // input state
  const [roomError, setRoomError] = useState("");

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ py: 1, height: "100vh" }}
    >
      <CustomDialog
        open={roomDialogOpen}
        handleClose={() => setRoomDialogOpen(false)}
        title="Подключение к комнате"
        contentText="Введите ID для подключения к комнате"
        handleContinue={() => {
          // join a room
          if (!roomInput) return; // if given room input is valid, do nothing.
          socket.emit("joinRoom", { roomId: roomInput }, (r) => {
            // r is the response from the server
            if (r.error) return setRoomError(r.message); // if an error is returned in the response set roomError to the error message and exit
            console.log("response:", r);
            setRoom(r?.roomId); // set room to the room ID
            setPlayers(r?.players); // set players array to the array of players in the room
            setOrientation("black"); // set orientation as black
            setRoomDialogOpen(false); // close dialog
          });
        }}
      >
        <TextField
          autoFocus
          margin="dense"
          id="room"
          label="Room ID"
          name="room"
          value={roomInput}
          required
          onChange={(e) => setRoomInput(e.target.value)}
          type="text"
          fullWidth
          variant="standard"
          error={Boolean(roomError)}
          helperText={
            !roomError ? "Введите ID комнаты" : `Ошибка в ID: ${roomError}`
          }
        />
      </CustomDialog>
      {/* Button for starting a game */}
      <Button
        variant="contained"
        onClick={() => {
          socket.emit("createRoom", (r) => {
            console.log(r);
            setRoom(r);
            setOrientation("white");
          });
        }}
      >
        Начать игру
      </Button>
      {/* Button for joining a game */}
      <Button
        onClick={() => {
          setRoomDialogOpen(true);
        }}
      >
        Присоединиться к игре
      </Button>
    </Stack>
  );
}
