import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	// For adding items dynamically to some list
	const [people, setPeople] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();
		// console.log(firstName, email);
		if (firstName && email) {
			// ES6 shorthand for creating object with same name for prop and value
			const person = { id: new Date().getTime().toString(), firstName, email };
			console.log(person);
			setPeople(people => {
				return [...people, person];
			});
			setFirstName('');
			setEmail('');
		} else {
			console.log('empty values');
		}
	};
	return (
		<>
			<article>
				<form className='form' onSubmit={handleSubmit}>
					<div className='form-control'>
						<label htmlFor='firstName'>Name :</label>
						<input
							type='text'
							id='firstName'
							name='firstName'
							value={firstName}
							onChange={e => {
								setFirstName(e.target.value);
							}}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='email'>Email :</label>
						<input
							type='text'
							id='email'
							name='email'
							value={email}
							onChange={e => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<button type='submit'>add person</button>
				</form>
				{people.map(person => {
					const { id, firstName, email } = person;
					return (
						<div className='item' key={id}>
							<h4>{firstName}</h4>
							<p>{email}</p>
						</div>
					);
				})}
			</article>
		</>
	);
};

export default ControlledInputs;
