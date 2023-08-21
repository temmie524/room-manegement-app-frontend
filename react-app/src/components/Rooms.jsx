import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const Rooms = () => {
	const baseUrl = process.env.REACT_APP_BE_URL;
	const [data, setData] = useState(null);
    const navi = useNavigate();

    //Page遷移の処理
    const handleClick = (id) => {
        navi(`/rooms/${id}`)
    }
    const GoTop = () =>{
        navi(`/`)
    }

    //Roomsの配列を取得
	useEffect(() => {
		axios.get(`${baseUrl}/rooms`).then((response) => {
				setData(response.data);
		});
	}, []);

        //error
	if (!data) {
		return <div>Loading...</div>;
	}

    //受け取った配列を取り出す
	const roomList = data.map((room) => {
		return (
			<li key={room.id}>
				<button onClick={() => handleClick(room.id)}>詳細</button>
				<a>{room.building}</a>
				<a>{room.room_num}</a>
			</li>
		);
	});

    //表示
	return (
		<>
		<h1>部屋リスト</h1>
		<ul>{roomList}</ul>
		<button onClick={() => GoTop()}>Topに戻る</button>
		</>

	);

}
