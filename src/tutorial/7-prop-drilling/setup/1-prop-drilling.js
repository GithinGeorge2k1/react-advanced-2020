import React, { useState } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)
// Direct result of state lifting -> component tree has handlers in higher nodes and we need to pass it down to lower nodes
const PropDrilling = () => {
	const [people, setPeople] = useState(data);
	const removePerson = id => {
		setPeople(people => {
			return people.filter(person => person.id !== id);
		});
	};
	return (
		<section>
			<h3>prop drilling</h3>
			<List people={people} removePerson={removePerson} />
		</section>
	);
};

const List = ({ people, removePerson }) => {
	return (
		<>
			{people.map(person => {
				return (
					<SinglePerson
						key={person.id}
						{...person}
						removePerson={removePerson}
					/>
				);
			})}
		</>
	);
};

const SinglePerson = ({ id, name, removePerson }) => {
	return (
		<div className='item'>
			<h4>{name}</h4>
			<button onClick={() => removePerson(id)}>Remove item</button>
		</div>
	);
};
export default PropDrilling;
