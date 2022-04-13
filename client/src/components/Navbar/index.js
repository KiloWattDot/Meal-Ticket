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
                        
                    <a href="./Home"><li>Home</li></a>
                        <a href="./ItemSection "><li>Order Now </li></a>
                        <a href="#Login"><li>Login</li></a>
                         <a href="./Checkout"><li>Cart</li></a>
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