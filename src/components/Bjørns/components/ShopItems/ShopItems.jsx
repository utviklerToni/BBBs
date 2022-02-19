import React from 'react';

import './shopItems.scss';

const ShopItems = () => {
  return (
    <div className='shop-page'>
      <div className='menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>For a Couple(2+)</h1>
            <span className='subtitle'>Book now</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>For a family (9+)</h1>
            <span className='subtitle'>Book now</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>For Friends (3+)</h1>
            <span className='subtitle'>Book now</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>For Office/Co-workers(6+)</h1>
            <span className='subtitle'>Book now</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Normal(1+)</h1>
            <span className='subtitle'>Book now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItems;
