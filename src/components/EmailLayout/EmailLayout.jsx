import React, { Fragment } from 'react';

import './email.css';

const EmailLayout = () => {
	return (
		<Fragment>
			<div className='grid-container'>
				<nav>Nav</nav>
				<menu>
					<button>new</button>
					<button>reply</button>
					<button>forward</button>
					<button>mark unread</button>
					<button>trash</button>
				</menu>
				<section>
					<div className='flex'>email1</div>
					<div className='flex'>email2</div>
					<div className='flex'>email3</div>
					<div className='flex'>email4</div>
					<div className='flex'>email5</div>
					<div className='flex'>email6</div>
					<div className='flex'>email7</div>
					<div className='flex'>email8</div>
					<div className='flex'>email9</div>
					<div className='flex'>email10</div>
				</section>
				<main>email view</main>
				<aside>additional info</aside>
			</div>
		</Fragment>
	);
};

export default EmailLayout;
