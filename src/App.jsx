import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { MainPage } from '../src/pages/MainPage/MainPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<MainPage />} />
				<Route exact path='/products' element={<MainPage />} />
			</Routes>
		</Router>
	);
}
export default App;
