import React from 'react';

import './bjornsApp.css';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';
import Section from './Section/Section';

const BjornsApp = () => {
	return (
		<div>
			<Header />
			<main>
				<HeroSection />
				<Section />
			</main>
		</div>
	);
};

export default BjornsApp;
