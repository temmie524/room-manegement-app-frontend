import React, { useEffect } from 'react'
import { Home } from './components/Home';
import { Rooms } from './components/Rooms';
import { Room } from './components/Room';
import { NotFound } from './components/NotFound';
import { Reservation } from './components/Reservation';
import { Routes,Route } from "react-router-dom";

export const App = () => {

  return (
			<Routes>
				<Route path="/rooms" element={<Rooms />} />
				<Route path="/rooms/:id" element={<Room />} />
				<Route path="/" element={<Home />} />
				<Route path="/reservations" element={<Reservation />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
  );
}
