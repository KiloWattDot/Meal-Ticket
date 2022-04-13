import React from "react";
import logo from './image/MealTicket-Logo(nobg).png'
import './Home.css';

const Home = () => (
    <div className ="home__app home__wrapper section__padding" id= "homepage">
        <div className ="app__wrapper_info">
            <h1 className = "home__app-h1">The Ticket To a Good Meal</h1>
    
        </div>
        <div className="home__app_logo ">
            <img src={logo} alt="logo_img"></img>
        </div>
    </div>
);

export default Home;