import React, { useEffect, useState } from 'react';

// import axios from 'axios';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_FAV } from '../utils/queries';
import { REMOVE_FAV } from '../utils/mutations';
import Taco_Gif from '../components/NavBar/img/taco-animated-gif.gif';
import Rating from 'react-rating';

import { Row, Col, Container, Button } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';


function Fav({setHolder}) {
	// const [favs, setFavs] = useState()
	// const navigate = useNavigate();

	const navigate = useNavigate();

	const { loading, data } = useQuery(QUERY_FAV);
	const [removeFav, { error }] = useMutation(REMOVE_FAV);

	let test = []

	const handleDeleteFav = async (id) => {
		try {
			const { data } = await removeFav({
				variables: { did: id },
			});
			
			console.log(data);
			
		} catch (err) {
			console.error(err);
		}

		window.location.reload();
		// navigate (`/favorites`)
		
	};

	const handleSelect = (id) =>{ 

    
		let foodSelected = test.find((food) => food.id === id);
	
		setHolder(foodSelected)
		navigate (`/choice/`+id)
	  };

	if (loading) {
		return <img src= {Taco_Gif} /> ;

	} else {
		console.log (data)

	test = data.savedRest.map((food) => ({
    id: food.resid,
    image_url: food.image_url,
    foodname: food.foodname,
	// rating: food.rating,
	// numOfReviews: food.numOfReviews,
	// // price: food.price,
	// tag: food.tag,
	// location: food.location,
	// phone: food.phone
  
  }));
  
		return (
			<Container fluid className="px-5">
				<h1> Your Favs</h1>
				{test.map((item, index) => {
				return (
					<div key={index}>
						<Row className=" my-5 shadow-lg p-4 bg-white border border-5 border-dark">
							<Col className="col-md-2">
								<img
									width="200"
									height="200"
									className=" float-end border border-5 border-dark "
									src={item.image_url}
									alt="First slide"
								/>
							</Col>
							<Col className="pt-5">
								<h1>{item.foodname}</h1>
								<div>
									{/* <p>{item.operation}</p> */}
									{/* <div className="rating-part">
										<Rating
											emptySymbol="far fa-star"
											fullSymbol="fas fa-star"
											fractions={2}
											readonly
											initialRating={item.rating}
										/>
										{item.numOfReviews} Reviews
									</div> */}

									{/* <p>{item.categories}</p> */}
									{/* <div className="tag"> */}
										{/* {item.price} */}
										 {/* <button>{item.tag}</button> */}
									{/* </div> */}
									<p></p>
								</div>
								{/* <p>{item.location.address1}</p> */}
								<Button onClick={() => handleDeleteFav(item.id)} variant="warning" >REMOVE</Button>
								<Link to={'/choice/' + item.id}>
									<Button onClick={() => handleSelect(item.id)} variant="warning">SELECT</Button>
								</Link>
							</Col>
							<Col className="col-md-7">
								{/* <div className="address-space"> */}
									{/* <p>{item.location}</p> */}
									{/* {item.phone} */}
								{/* </div> */}
							</Col>
						</Row>
					</div>
				);
			})}
				
			</Container>
		);
	}
}

export default Fav;
