import React, { Fragment } from 'react';

import MenuDirectory from '../../components/MenuDirectory/MenuDirectory';

const ShopPage = (props) => {
	console.log(props);
	return (
		<Fragment>
			<div className='shop-page' style={{ marginTop: '100px' }}>
				<MenuDirectory />
			</div>
		</Fragment>
	);
};

export default ShopPage;
