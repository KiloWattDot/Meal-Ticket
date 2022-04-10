import React, {useState} from "react";
import logo from './image/MealTicket-Logo(nobg).png'
import './nav-style.css';




function Navbar() {

    let  [toggle, setToggle] = useState(false)



  // This is a handler that we will reference in our `onClick` attribute later
  const handleToggle = () => {
     setToggle(!toggle)
    console.log(`click`);
  };


    return ( 
      
           <div> 
                 <img className="logo" src={logo} alt="Meal Ticket Logo"></img>
                <nav className="">
                
                    <ul className= 'navList' id={toggle ? 'active' : ''} >
                        
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>Order Now </li></a>
                        <a href="#"><li>Cart</li></a>
                        <a href="#"><li>Login</li></a>
                        <input type="text" placeholder="Enter Zipcode"></input>
                        
                    </ul>

                    <div className='menu' onClick={handleToggle} >
                        <div className='menu-line'></div>
                        <div className='menu-line'></div>
                        <div className='menu-line'></div>
                    </div>
                </nav>
 
            </div>
    );

}

export default Navbar;

// {toggle ? "navList" : "hide"}