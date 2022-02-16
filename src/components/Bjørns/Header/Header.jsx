import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import './headerQueries.css';
import Hamburger from '../../assets/svgs/Hamburger';
import Close from '../../assets/svgs/Close';
import logo from '../../assets/imgs/small_logoBBBs.png';

const Header = () => {
	return (
		<div>
			<header className='header'>
				<Link to='/'>
					<div className='logo'>
						<img src={logo} alt='' />
					</div>
				</Link>

				<nav className='main-nav'>
					<ul className='main-nav-list'>
						<li>
							<Link className='main-nav-link' to='/'>
								Home
							</Link>
						</li>
						<li>
							<Link className='main-nav-link' to='/'>
								Menus
							</Link>
						</li>
						<li>
							<Link className='main-nav-link' to='/'>
								Who We Are
							</Link>
						</li>
						<li>
							<Link className='main-nav-link' to='/'>
								Testimonials
							</Link>
						</li>
						<li>
							<Link className='main-nav-link nav-cta' to='/'>
								Access To Recipes
							</Link>
						</li>
					</ul>
				</nav>

				<button className='btn-mobile-nav'>
					<Hamburger />
					<Close />
				</button>
			</header>
		</div>
	);
};

export default Header;
