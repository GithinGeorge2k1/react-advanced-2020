import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';

// useParams is a hook in react router that lets
// us access properties of url
const Person = () => {
	const [name, setName] = useState('default Name');
	const { id } = useParams();
	useEffect(() => {
		// string int checking
		const newPerson = data.find(person => person.id === parseInt(id));
		setName(newPerson.name);
		return () => {};
	}, []);
	return (
		<div>
			<h1>{name}</h1>
			<Link to='/people' className='btn'>
				Back To People
			</Link>
		</div>
	);
};

export default Person;
