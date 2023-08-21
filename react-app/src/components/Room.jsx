import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const Room = () => {
    const {id} = useParams();
    const baseUrl = process.env.REACT_APP_BE_URL;
    const [room, setRoom] = useState(null);
    const navi = useNavigate();

    const GoBack = () => {
        navi(-1)
    }

		const GoReservation = () => {
				navi(`/reservation`)
		}

    useEffect(() => {
        axios.get(`${baseUrl}/rooms/${id}`).then((response) => {
            setRoom(response.data);
        });
}, []);

if (!room) {
    return <div>Loading...</div>;
}

  return (
    <>
      <h1>RoomID:{room.id}</h1>
      <h1>Room_Number:{room.room_num}</h1>
      <h1>Building:{room.building}</h1>

			<button onClick={() => GoBack()}>予約に進む</button>
			<button onClick={() => GoBack()}>一覧に戻る</button>
        
    </>

  );
    }