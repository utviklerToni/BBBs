import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Header from './components/Bjørns/Header/Header';
import HeroSection from './components/Bjørns/HeroSection/HeroSection';
import Section from './components/Bjørns/Section/Section';

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<main>
					<HeroSection />
					<Section />
				</main>
			</div>
		</Router>
	);
};

export default App;
