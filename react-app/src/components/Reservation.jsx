import React from "react";
import axios from "axios";

import { useForm } from 'react-hook-form'

export const Reservation = () => {
	return (
		<>
			<h1>予約</h1>
			<form>
				<label>予約日</label>
				<input type="date" name="date" />
				<label>予約時間</label>
			</form>
		</>
	)}