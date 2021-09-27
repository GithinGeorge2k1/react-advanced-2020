import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
	return (
		<Router>
			<Navbar />

			{/* Switch is basically saying choose one route that matches */}
			<Switch>
				{/* Path is from domain */}
				{/* exact path helps with visibility ->component will be displayed 
      with an exact match. Else it will display if component is in a sub path*/}
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/people'>
					<People />
				</Route>
				{/* url parameters */}
				<Route path='/person/:id' children={<Person />}></Route>

				{/* * matches with every path*/}
				<Route path='*'>
					<Error />
				</Route>
			</Switch>
		</Router>
	);
};

export default ReactRouterSetup;
