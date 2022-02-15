import React, { Fragment } from 'react';

const Wine = () => {
	return (
		<Fragment>
			<span className='icon-modified-shades'>
				<svg
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 16 16'
					height='16px'
					width='16px'>
					<title>wine</title>
					<path
						d='M4 4h8c0 2.5.5 4.5-3.996 4.5C3.5 8.5 4 6.5 4 4z'
						opacity='.2'></path>
					<path d='M4.996.994c-2 0-2 1.58-2 2.5C2.996 6.612 3.275 9.5 7 9.5V14H4.5a.499.499 0 1 0 0 1h7a.499.499 0 1 0 0-1H9V9.5c3.5 0 4.004-2.888 4.004-6.006 0-.92 0-2.5-2-2.5L8 .996 4.996.994zm.004 1 3 .002 3-.002c1.004 0 1.004.507 1.004 1.178C12.004 8.012 11 8.5 8 8.5c-3 0-4.004-.488-4.004-5.328 0-.671 0-1.178 1.004-1.178z'></path>
				</svg>
			</span>
		</Fragment>
	);
};

export default Wine;
