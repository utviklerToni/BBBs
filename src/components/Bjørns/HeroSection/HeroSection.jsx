import React from 'react';
import { Link } from 'react-router-dom';

import './heroSection.css';
// import heroImage from '../../assets/beer_malt.jpeg';
import heroImage from '../../assets/imgs/reiseuhu-IWfIWenzYyo-unsplash.jpg';
import customer1 from '../../assets/imgs/customers/customer-1.jpg';
import customer2 from '../../assets/imgs/customers/customer-2.jpg';
import customer3 from '../../assets/imgs/customers/customer-3.jpg';
import customer4 from '../../assets/imgs/customers/customer-4.jpg';
import customer5 from '../../assets/imgs/customers/customer-5.jpg';
import customer6 from '../../assets/imgs/customers/customer-6.jpg';

const HeroSection = () => {
	return (
		<section className='hero-section'>
			<div className='hero'>
				<div className='hero-text-box'>
					<h1 className='heading-primary'>
						A taste delivered to your tongue, in every sip.
					</h1>
					<p className='hero-description'>
						The smart 365-days-per-year food subscription that will make you eat
						healthy again. Tailored to your personal tastes and nutritional
						needs. We have delivered 250,000+ meals last year!
					</p>
					<Link to='/' className='btn btn--full mx-sm'>
						Take a Sip
					</Link>
					<Link to='/' className='btn btn--outline'>
						How its made &darr;
					</Link>
					<div className='customer-feedback'>
						<div className='customer-imgs'>
							<img src={customer1} alt='customer-1' />
							<img src={customer2} alt='customer-2' />
							<img src={customer3} alt='customer-3' />
							<img src={customer4} alt='customer-4' />
							<img src={customer5} alt='customer-5' />
							<img src={customer6} alt='customer-6' />
						</div>
						<p className='feedback-text'>
							Customers to whom we delivered the <span>taste</span> of
							authenticity.
						</p>
					</div>
				</div>
				<div className='hero-img-box'>
					<img src={heroImage} alt='A chilled beer mug' className='hero-img' />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
