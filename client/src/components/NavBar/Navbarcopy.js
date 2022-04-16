import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import {
	
	Form,
	FormControl,
	Button,
} from 'react-bootstrap';

import logo from './img/MealTicket-Logo(nobg).png';
import './navbar.css';

import { useQuery } from '@apollo/client';
import { GET_USER } from '../../utils/queries';

function Navbar1() {

	// const { loading, data } = useQuery(GET_USER);
// console.log (data)
// const username = data
	const [searchInput, setSearchInput] = useState('');

	const navigate = useNavigate();

	const handleClick = () => navigate(`/results/` + searchInput);

	let [toggle, setToggle] = useState(false);

	// This is a handler that we will reference in our `onClick` attribute later
	const handleToggle = () => {
		setToggle(!toggle);
		console.log(`click`);
	};


	
	return (
		<div>
			<a href="/"><img className="logo" src={logo} alt="Meal Ticket Logo"></img></a>
			<nav className="">
				<ul className="navList" id={toggle ? 'active' : ''}>
					<a href="/">
						<li>Home</li>
					</a>
					<a href="#">
						<li>Order Now </li>
					</a>
					<a href="/favorites">
						<li>Favorites</li>
					</a>
					<a href="/checkout">
						<li>Cart</li>
					</a>
					<a href="/login">
						<li>Login</li>
					</a>
					<a href="/signup">
						<li>Join</li>
					</a>
					{/* <h2>{}</h2> */}
					<Form className="d-flex">
						<FormControl
							name="searchInput"
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
							type="search"
							placeholder="Enter zip code or city"
							className="me-2"
							aria-label="Search"
						/>
						<Button
							onClick={handleClick}
							type="submit"
							variant="outline-warning"
						>
							Search Nearby
						</Button>
					</Form>
					
				</ul>

				<div className="menu" onClick={handleToggle}>
					<div className="menu-line"></div>
					<div className="menu-line"></div>
					<div className="menu-line"></div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar1;

// {toggle ? "navList" : "hide"}
