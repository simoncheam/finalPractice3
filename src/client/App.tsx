import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';

// ! I need to review how to set up route syntax

const App = (props: AppProps) => {



	return (
		<BrowserRouter>
			<Navbar />

			<Routes>


				{/* public view */}
				{/* private view */}


				<Route element={<Home />}>  </Route>
				<Route element={<Register />}>  </Route>
				<Route element={<Login />}>  </Route>






			</Routes>
		</BrowserRouter>
	);
};

interface AppProps { }



export default App;
