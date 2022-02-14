import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import BjornsApp from './components/Bjørns/BjornsApp';

const App = () => {
	return (
		<Router>
			<div>
				<Route exact path='/' component={BjornsApp} />
			</div>
		</Router>
	);
};

export default App;
