import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
        <h1>ホームです</h1>
        <li>
            <p>aa</p>
            <Link to="rooms">部屋一覧</Link>
        </li>
        </>
    );
}
