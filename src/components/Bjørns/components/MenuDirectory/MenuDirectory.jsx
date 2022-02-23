import React, { Component } from 'react';

import './menuDirectory.scss';
import MenuItem from '../MenuItem/MenuItem';

class ShopDirectory extends Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: 'Beer',
					imageUrl:
						'https://images.pexels.com/photos/5864290/pexels-photo-5864290.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
					id: 1,
					linkUrl: 'beer',
				},
				{
					title: 'Couple',
					imageUrl:
						'https://images.pexels.com/photos/2878745/pexels-photo-2878745.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
					id: 2,
					linkUrl: '',
				},
				{
					title: 'Rush Hour',
					imageUrl:
						'https://images.pexels.com/photos/1352262/pexels-photo-1352262.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
					id: 3,
					linkUrl: '',
				},
				{
					title: 'Friends',
					imageUrl:
						'https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
					id: 4,
					linkUrl: '',
				},
				{
					title: 'Family',
					imageUrl:
						'https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
					id: 5,
					linkUrl: '',
				},
			],
		};
	}

	render() {
		return (
			<div className='menu-directory'>
				{this.state.sections.map(({ title, imageUrl, id, linkUrl, size }) => (
					// ES6 minimization
					// we can use spread operator to minimize the props to one props
					// {...otherSectionProps} otherSection is just the name , choose any name you want

					// {this.state.sections.map(({ id, ...otherProps }) => (
					// <MenuItem key={id}  {  ...otherProps }/>
					// ))}

					<MenuItem
						key={id}
						title={title}
						imageUrl={imageUrl}
						linkUrl={linkUrl}
						size={size}
					/>
				))}
			</div>
		);
	}
}
export default ShopDirectory;
