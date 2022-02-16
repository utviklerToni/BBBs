import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './footer.css';
import './footerQueries.css';

import Facebook from '../../assets/svgs/Facebook';
import Instagram from '../../assets/svgs/Instagram';
import Twitter from '../../assets/svgs/Twitter';
import Youtube from '../../assets/svgs/Youtube';

const Footer = () => {
	return (
		<Fragment>
			<div className='footer'>
				<div className='container grid grid--footer'>
					<div className='logo-col'>
						<Link to='/' className='footer-logo footer-link'>
							<div className='logo'>BJØRNS BEERS & BARS</div>
						</Link>

						<ul className='social-links'>
							<li>
								<a href='/' className='social-link'>
									<Facebook />
								</a>
							</li>
							<li>
								<a href='/' className='social-link'>
									<Twitter />
								</a>
							</li>
							<li>
								<a href='/' className='social-link'>
									<Youtube />
								</a>
							</li>
							<li>
								<a href='/' className='social-link'>
									<Instagram />
								</a>
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
								693 Bjørnveien gt. , 3rd Floor, Bjørn Bilder, Bergen 9369
							</p>
							<a href='tel:369-369-6969' className='footer-link'>
								369-369-6969
							</a>
							<br />
							<a href='mailto:hello@omnifood.com' className='footer-link'>
								bjorn@bbbs.com
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
