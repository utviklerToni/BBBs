import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Bjørns/components/Header/Header';
import HomgePage from './components/Bjørns/Pages/Homepage/HomgePage';
import BeerPage from './components/Bjørns/Pages/MenuDirectoryPages/BeerPage';
import ShopPage from './components/Bjørns/Pages/ShopPage/ShopPage';

const App = () => {
	return (
		<div>
			<Header />
			<main>
				<Switch>
					<Route path='/BBBs' component={HomgePage} />
					<Route path='/' component={ShopPage} />
					<Route exact path='/beer' component={BeerPage} />
				</Switch>
			</main>
		</div>
	);
};

export default App;
