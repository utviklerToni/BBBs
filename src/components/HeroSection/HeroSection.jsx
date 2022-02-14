import React, { Fragment } from 'react';

import './hero.css';

const HeroSection = () => {
	return (
		<Fragment>
			<header>
				<nav className='container'>
					<div>LOGO</div>
					<div>NAVIGATION</div>
				</nav>
				<div className='header-container'>
					<div className='header-container-inner'>
						<h1>A healthy meal delievered to your door, every single day</h1>
						<p>
							Organic food straight from the farmers household that will give you
							the real taste of food.
						</p>
						<a href='/' className='btn'>
							Nature Heals
						</a>
					</div>
				</div>
			</header>
			<section>
				<div className='container'>
					<h2>Random Heading</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iste
						sapiente corrupti facilis nobis voluptate porro, et fugiat ipsam nam
						harum aliquid ex atque unde dignissimos, exercitationem nostrum minus
						quasi! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Temporibus inventore reiciendis amet cum sapiente cumque culpa
						assumenda aliquid, optio iste quod ipsum necessitatibus ratione velit
						fugit! Veniam perspiciatis nisi dolorem.
					</p>
				</div>
			</section>
		</Fragment>
	);
};

export default HeroSection;
