import React from 'react';

import './bjornsApp.css';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';

const BjornsApp = () => {
	return (
		<div>
			<Header />
			<main>
				<HeroSection />
			</main>
		</div>
	);
};

export default BjornsApp;
