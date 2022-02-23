import React from 'react';
import { withRouter } from 'react-router-dom';

import './menuItems.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	return (
		<div
			className={`${size} menu-item meal-box`}
			onClick={() => history.push(`${match.url}${linkUrl}`)}>
			<div
				className='bg-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className='content'>
				<h1 className='title'>{title}</h1>
				<span className='subtitle'>Shop Now</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
