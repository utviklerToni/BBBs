import React, { Fragment } from 'react';

import './form.css';
import './formQueries.css';

const Form = () => {
	return (
		<Fragment>
			<form className='cta-form' action='#'>
				<div className=''>
					<label htmlFor='full-name'> Full Name</label>
					<input type='text' id='full-name' placeholder='John Doe' required />
				</div>

				<div>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' placeholder='me@example.com' required />
				</div>

				<div>
					<label htmlFor='select-where'>where did you hear from us?</label>
					<select name='' id='select-where'>
						<option value=''>Please choose one option</option>
						<option value='friends'>Friends and Family</option>
						<option value='youtube'>youtube</option>
						<option value='ad'>ad</option>
						<option value='podcast'>Poscast</option>
					</select>
				</div>

				<button className='btn btn--form'>Sign up</button>
			</form>
		</Fragment>
	);
};

export default Form;
