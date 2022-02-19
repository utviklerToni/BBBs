import React from 'react';
import { Link } from 'react-router-dom';

import './heroSection.css';
import './heroSectionQueries.css';

import heroImage from '../../../assets/imgs/reiseuhu-IWfIWenzYyo-unsplash.jpg';

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
        </div>
        <div className='hero-img-box'>
          <img
            src={heroImage}
            alt='A chilled beer mug'
            className='hero-img meal-box'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
