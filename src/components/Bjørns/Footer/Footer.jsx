import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.development';

import './footer.css';
import './footerQueries.css';

const Footer = () => {
	return (
		<Fragment>
			<div className='footer'>
				<div className='container grid grid--footer'>
					<div className='logo-col'>
						<Link to='/' className='footer-logo'>
							<div className='logo'>BJØRNS BEERS & BARS</div>
						</Link>

						<ul className='social-links'>
							<li>
								<a href='/'>Facebook</a>
							</li>
							<li>
								<a href='/'>Twitter</a>
							</li>
							<li>
								<a href='/'>Youtube</a>
							</li>
							<li>
								<a href='/'>Instagram</a>
							</li>
						</ul>

						<p className='copyright'>
							Copyright &copy; 2022 by BJØRNS BEERS & BARS AS
						</p>
					</div>
					<div className='address-col'>
						<p className='footer-heading'>Contact Us</p>
						<address className='contacts'>
							<p className='address'>
								623 Harrison St., 2nd Floor, San Francisco, CA 94107
							</p>
							<a href='tel:415-201-6370' className='footer-link'>
								415-201-6370
							</a>
							<br />
							<a href='mailto:hello@omnifood.com' className='footer-link'>
								hello@omnifood.com
							</a>
						</address>
					</div>
					<div className='nav-col'>
						<p className='footer-heading'>Account</p>
						<ul className='footer-nav'>
							<li>
								<a href='/' className='footer-link'>
									Create Account
								</a>
							</li>
							<li>
								<a href='/' className='footer-link'>
									Sign In
								</a>
							</li>
							<li>
								<a href='/' className='footer-link'>
									iOS App
								</a>
							</li>
							<li>
								<a href='/' className='footer-link'>
									Android App
								</a>
							</li>
						</ul>
					</div>

					<div className='nav-col'>
						<p className='footer-heading'>Company</p>
						<ul className='footer-nav'>
							<li>
								<a href='/' className='footer-link'>
									About BBBs
								</a>
							</li>
							<li>
								<a href='/' className='footer-link'>
									For Business
								</a>
							</li>
							<li>
								<a href='/' className='footer-link'>
									Cooking Partners
								</a>
							</li>
							<li>
								<a href='/' className='footer-link'>
									Careers
								</a>
							</li>
						</ul>
					</div>

					<div className='nav-col'>
						<p className='footer-heading'>Resources</p>
						<ul className='footer-nav'>
							<li>
								<a href='/' className='footer-link'>
									Recipe directory
								</a>
							</li>
							<li>
								<a href='/' className='footer-link'>
									Help & Support
								</a>
							</li>
							<li>
								<a href='/' className='footer-link'>
									Privacy & Terms
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Footer;
