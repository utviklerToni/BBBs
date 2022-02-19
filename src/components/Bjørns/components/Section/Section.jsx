import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './section.css';
import './sectionQueries.css';

import Clock from '../../../assets/svgs/Clock';
import Pause from '../../../assets/svgs/Pause';
import Grain from '../../../assets/svgs/Grain';
import Home from '../../../assets/svgs/Home';

import appScreen1 from '../../../assets/imgs/jon-tyson-kctt4tL1dkE-unsplash.jpg';
import appScreen2 from '../../../assets/imgs/paul-hermann-jeiqzOgwwKU-unsplash.jpg';
import appScreen3 from '../../../assets/imgs/nathan-dumlao-IjovY65WQiE-unsplash.jpg';

import logo1 from '../../../assets/imgs/logos/business-insider.png';
import logo2 from '../../../assets/imgs/logos/forbes.png';
import logo3 from '../../../assets/imgs/logos/techcrunch.png';
import logo4 from '../../../assets/imgs/logos/the-new-york-times.png';
import logo5 from '../../../assets/imgs/logos/usa-today.png';
import meal1 from '../../../assets/imgs/meals/meal-1.jpg';
import meal2 from '../../../assets/imgs/meals/meal-2.jpg';
import Fire from '../../../assets/svgs/Fire';
import Heart from '../../../assets/svgs/Heart';
import Group from '../../../assets/svgs/Group';
import CheckedBox from '../../../assets/svgs/CheckedBox';
import customer_1 from '../../../assets/imgs/customers/customer-1.jpg';
import customer_2 from '../../../assets/imgs/customers/customer-2.jpg';
import customer_3 from '../../../assets/imgs/customers/customer-3.jpg';
import customer_4 from '../../../assets/imgs/customers/customer-4.jpg';

import gallery1 from '../../../assets/imgs/gallery/gallery-1.jpg';
import gallery2 from '../../../assets/imgs/gallery/gallery-2.jpg';
import gallery3 from '../../../assets/imgs/gallery/gallery-3.jpg';
import gallery4 from '../../../assets/imgs/gallery/gallery-4.jpg';
import gallery5 from '../../../assets/imgs/gallery/gallery-5.jpg';
import gallery6 from '../../../assets/imgs/gallery/gallery-6.jpg';
import gallery7 from '../../../assets/imgs/gallery/gallery-7.jpg';
import gallery8 from '../../../assets/imgs/gallery/gallery-8.jpg';
import gallery9 from '../../../assets/imgs/gallery/gallery-9.jpg';
import gallery10 from '../../../assets/imgs/gallery/gallery-10.jpg';
import gallery11 from '../../../assets/imgs/gallery/gallery-11.jpg';
import gallery12 from '../../../assets/imgs/gallery/gallery-12.jpg';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';

const Section = () => {
  return (
    <Fragment>
      <section className='section-featured'>
        <div className='container'>
          <h2 className='heading-featured-in'>As featured in</h2>
          <div className='logos'>
            <img src={logo1} alt='logo' />
            <img src={logo2} alt='logo' />
            <img src={logo3} alt='logo' />
            <img src={logo4} alt='logo' />
            <img src={logo5} alt='logo' />
          </div>
        </div>
      </section>

      {/* 2nd section */}
      <section className='section-how'>
        <div className='container'>
          <span className='subheading'>For we the people</span>
          <h2 className='heading-secondary'>
            We are dedicated to support our local farmers.
          </h2>
        </div>

        <div className='container grid grid--2-cols grid--center-x'>
          {/* step - 01 */}
          <div className='step-text-box'>
            {/* <p className='step-number'>01</p> */}
            <h3 className='heading-tertiary'>
              We use organically raised cattles
            </h3>
            <p className='step-description'>
              Our farmers use natural means to raise the animals and grow
              vegetables on their farm. Our job is make sure that our customers
              get organic food so that we can serve nothing the nutrients and
              vitamins that they need, they deserve. No matter what diet they
              follow!
            </p>
          </div>
          <div className='step-img-box meal-box'>
            <img
              src={appScreen1}
              alt='preferences selection screen'
              className='step-img'
            />
          </div>
          {/* step - 02 */}
          <div className='step-img-box meal-box'>
            <img
              src={appScreen2}
              alt='meal approving plan screen'
              className='step-img'
            />
          </div>
          <div className='step-text-box'>
            {/* <p className='step-number'>02</p> */}
            <h3 className='heading-tertiary'>
              Join our weekly back-yard barbecue session
            </h3>
            <p className='step-description'>
              Once per week, We invite all our farmers and customers for a
              delicous, simple and juicy barbecue. Our chefs serve their best as
              always. You can change ingredients, swap entire meals, or even add
              your own recipes, our chefs have you covered.
            </p>
          </div>
          {/* step - 03 */}
          <div className='step-text-box'>
            {/* <p className='step-number'>03</p> */}
            <h3 className='heading-tertiary'>
              Have your meals at your convenience
            </h3>
            <p className='step-description'>
              Best chefs in town will cook your selected meal every day, and we
              also deliver it to your house between 12pm to 6pm. You can select
              delivery schedule and address daily!
            </p>
            <p></p>
          </div>

          <div className='step-img-box meal-box'>
            <img
              src={appScreen3}
              alt='preferences selection screen'
              className='step-img'
            />
          </div>
        </div>
      </section>

      {/* 3rd section */}
      <section className='section-meals'>
        <div className='container center-text'>
          <span className='subheading'>Vegetarian</span>
          <h2 className='heading-secondary'>
            Choose our delicious vegetarians dishes.
          </h2>
        </div>

        <div className='container grid grid--3-cols my-6'>
          <div className='meal-box meal-box_h'>
            <img src={meal1} alt='meals' className='meal-img' />
            <div className='meal-content'>
              <div className='meal-tags'>
                <span className='tag'>Vegetarian</span>
              </div>
              <p className='meal-title'>Momos</p>
              <ul className='meal-attributes'>
                <li className='meal-attribute'>
                  <Fire /> 650 Calories
                </li>
                <li className='meal-attribute'>
                  <Heart /> NutriScore &reg; 69
                </li>
                <li className='meal-attribute'>
                  <Group /> 4.5 rating (690)
                </li>
              </ul>
            </div>
          </div>
          <div className='meal-box meal-box_h'>
            <img src={meal2} alt='meals' className='meal-img' />
            <div className='meal-content'>
              <div className='meal-tags'>
                <span className='tag'>Vegetarian</span>
                <span className='tag tag--hot'>Spicy</span>
              </div>
              <p className='meal-title'>Avocado Salad</p>
              <ul className='meal-attributes'>
                <li className='meal-attribute'>
                  <Fire /> <strong>400</strong> Calories
                </li>
                <li className='meal-attribute'>
                  <Heart /> NutriScore &reg; 92
                </li>
                <li className='meal-attribute'>
                  <Group /> 4.9 rating (800)
                </li>
              </ul>
            </div>
          </div>
          <div className='diets'>
            <h3 className='heading-tertiary'>Our Delicious Menu:</h3>
            <ul className='list'>
              <li className='list-item'>
                <CheckedBox />
                <span>Vegetarian</span>
              </li>
              <li className='list-item'>
                <CheckedBox />
                <span>Spicy</span>
              </li>
              <li className='list-item'>
                <CheckedBox />
                <span>Creamy</span>
              </li>
              <li className='list-item'>
                <CheckedBox />
                <span>Mild</span>
              </li>
              <li className='list-item'>
                <CheckedBox />
                <span>Vanila</span>
              </li>
              <li className='list-item'>
                <CheckedBox />
                <span>Beers</span>
              </li>
              <li className='list-item'>
                <CheckedBox />
                <span>Barbecue</span>
              </li>
              <li className='list-item'>
                <CheckedBox />
                <span>IceCream</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='container all-recipes'>
          <a href='/' className='link'>
            See all recipes &rarr;
          </a>
        </div>
      </section>

      {/* ================================================== */}

      {/* testimonial section */}

      <section className='section-testimonials '>
        <div className='testimonials-container'>
          <span className='subheading'>Testimonials</span>
          <h2 className='heading-secondary'>
            Listen to what our customers say
          </h2>
          <div className='testimonials'>
            <figure className='testimonial'>
              <img
                src={customer_1}
                alt='customer  1'
                className='testimonial-img'
              />
              <blockquote className='testimonial-text'>
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </blockquote>
              <p className='testimonial-name'>&mdash; Dave Bryson</p>
            </figure>
            <figure className='testimonial'>
              <img
                src={customer_2}
                alt='customer  2'
                className='testimonial-img'
              />
              <blockquote className='testimonial-text'>
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It's amazing not to worry about food anymore!
              </blockquote>
              <p className='testimonial-name'>&mdash; (Ben Hadley)</p>
            </figure>
            <figure className='testimonial'>
              <img
                src={customer_3}
                alt='customer  3'
                className='testimonial-img'
              />
              <blockquote className='testimonial-text'>
                Omnifood is a life saver! I just started a company, so there's
                no time for cooking. I couldn't live without my daily meals now!
              </blockquote>
              <p className='testimonial-name'>&mdash; Steve Miller</p>
            </figure>
            <figure className='testimonial'>
              <img
                src={customer_4}
                alt='customer  4'
                className='testimonial-img'
              />
              <blockquote className='testimonial-text'>
                I got Omnifood for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </blockquote>
              <p className='testimonial-name'>&mdash; Hannah Smith</p>
            </figure>
          </div>
        </div>
        <div className='gallery'>
          <figure className='gallery-item'>
            <img
              src={gallery1}
              alt='gallery1'
              className='meal-box meal-box--sm-screen'
            />
          </figure>
          <figure className='gallery-item'>
            <img
              src={gallery2}
              alt='gallery2'
              className='meal-box meal-box--sm-screen'
            />
          </figure>
          <figure className='gallery-item'>
            <img
              src={gallery3}
              alt='gallery3'
              className='meal-box meal-box--sm-screen'
            />
          </figure>
          <figure className='gallery-item'>
            <img
              src={gallery4}
              alt='gallery4'
              className='meal-box meal-box--sm-screen'
            />
          </figure>
          <figure className='gallery-item'>
            <img
              src={gallery5}
              alt='gallery5'
              className='meal-box meal-box--sm-screen'
            />
          </figure>
          <figure className='gallery-item'>
            <img
              src={gallery6}
              alt='gallery6'
              className='meal-box meal-box--sm-screen'
            />
          </figure>
          <figure className='gallery-item'>
            <img
              src={gallery7}
              alt='gallery7'
              className='meal-box meal-box--sm-screen'
            />
          </figure>
          <figure className='gallery-item'>
            <img
              src={gallery8}
              alt='gallery8'
              className='meal-box meal-box--sm-screen'
            />
          </figure>
          <figure className='gallery-item'>
            <img
              src={gallery9}
              alt='gallery9'
              className='meal-box meal-box--sm-screen'
            />
          </figure>
          <figure className='gallery-item'>
            <img
              src={gallery10}
              alt='gallery10'
              className='meal-box meal-box--sm-screen'
            />
          </figure>
          <figure className='gallery-item'>
            <img
              src={gallery11}
              alt='gallery11'
              className='meal-box meal-box--sm-screen'
            />
          </figure>
          <figure className='gallery-item'>
            <img
              src={gallery12}
              alt='gallery12'
              className='meal-box meal-box--sm-screen'
            />
          </figure>
        </div>
      </section>

      {/* pricing section */}
      <section className='section-pricing'>
        <div className='container'>
          <span className='subheading'>Pricing</span>
          <h2 className='heading-secondary'>
            Eating organic without worrying about price
          </h2>
        </div>

        <div className='container grid grid--3-cols my-6'>
          <div className='meal-plan meal-plan--tre meal-box meal-box--slideout'>
            <div className='plan-header'>
              <p className='plan-name'>Starter</p>
              <p className='plan-price'>
                <span>$</span>399
              </p>
              <p className='plan-text'>per month. or $13 per meal</p>
            </div>
            <ul className='list'>
              <li className='list-item'>
                <CheckedBox />
                <span>
                  <strong>3 meals</strong>
                </span>
              </li>
              <li className='list-item'>
                <CheckedBox /> <span>Order from 11am to 5pm</span>
              </li>
              <li className='list-item'>
                <CheckedBox /> <span>No charge for Delivery </span>
              </li>
            </ul>
            <div className='plan-sign-up'>
              <Link to='/' className='btn static'>
                Book a spot
              </Link>
            </div>
          </div>

          <div className='meal-plan meal-plan--ni meal-box meal-box--slideout'>
            <div className='plan-header'>
              <p className='plan-name'>Extra Large</p>
              <p className='plan-price'>
                <span>$</span>699
              </p>
              <p className='plan-text'>per month. or $13 per meal</p>
            </div>
            <ul className='list'>
              <li className='list-item'>
                <CheckedBox />
                <span>
                  <strong>9 meals</strong>
                </span>
              </li>
              <li className='list-item'>
                <CheckedBox />
                <span>
                  Order timing <strong>24/7</strong>
                </span>
              </li>
              <li className='list-item'>
                <CheckedBox /> <span>No charge for Delivery </span>
              </li>
            </ul>
            <div className='plan-sign-up'>
              <Link to='/' className='btn static'>
                Book a spot
              </Link>
            </div>
          </div>

          <div className='meal-plan meal-plan--seks meal-box meal-box--slideout'>
            <div className='plan-header'>
              <p className='plan-name'>Large</p>
              <p className='plan-price'>
                <span>$</span>499
              </p>
              <p className='plan-text'>per month. or $13 per meal</p>
            </div>
            <ul className='list'>
              <li className='list-item'>
                <CheckedBox />
                <span>
                  <strong>6 meals</strong>
                </span>
              </li>
              <li className='list-item'>
                <CheckedBox /> <span>Order from 11am to 5pm</span>
              </li>
              <li className='list-item'>
                <CheckedBox /> <span>No charge for Delivery </span>
              </li>
            </ul>
            <div className='plan-sign-up'>
              <Link to='/' className='btn static'>
                Book a spot
              </Link>
            </div>
          </div>
        </div>

        <div className='container grid'>
          <aside className='plan-details'>
            Price includes all the extra taxes and charges. You can cancel at
            any time. All three plans includes the follow:
          </aside>
        </div>

        {/* feature section */}

        <div className='container grid grid--4-cols'>
          <div className='feature'>
            <div className='feature-icon'>
              <Clock />
            </div>
            <p className='feature-title'>No hidden price</p>
            <p className='feature-text'>
              Our meal is enough for 2 large person. Our cooks only use
              local,fresh, and organic.
            </p>
          </div>
          <div className='feature'>
            <div className='feature-icon'>
              <Pause />
            </div>
            <p className='feature-title'>Pause anytime</p>
            <p className='feature-text'>
              Pause anytime: Going on vacation? Just pause your subscription,
              and we refund unused days.
            </p>
          </div>
          <div className='feature'>
            <div className='feature-icon'>
              <Home />
            </div>
            <p className='feature-title'>Local & Organic</p>
            <p className='feature-text'>
              Local and organic: Our cooks only use local, fresh, and organic
              products to prepare your meals.
            </p>
          </div>
          <div className='feature'>
            <div className='feature-icon'>
              <Grain />
            </div>
            <p className='feature-title'>No Waste</p>
            <p className='feature-text'>
              No waste: All our partners only use reusable containers to package
              all your meals.
            </p>
          </div>
        </div>
      </section>

      <section className='section-cta'>
        <div className='container'>
          <div className='cta'>
            <div className='cta-text-box'>
              <h2 className='heading-secondary'>First time visiting us?</h2>
              <p className='cta-text'>
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>

              {/* form section */}

              <Form />
            </div>
            <div
              className='cta-img-box'
              role={'img'}
              aria-label={'A Gentle man eating his meal.'}
            ></div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Section;
