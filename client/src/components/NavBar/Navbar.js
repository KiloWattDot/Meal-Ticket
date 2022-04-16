import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';


const AppNavbar = () => {

const [searchInput, setSearchInput] = useState('');

const navigate = useNavigate();

  
const handleClick = () => navigate (`/results/`+searchInput);
  

  return (
    <Navbar bg="dark" expand="lg">
  
  <Container fluid>
      <Navbar.Brand as={NavLink} to="/" className='display-1 text-warning'>MEAL TICKET</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link as={NavLink} to="/favorites" className='text-light'>Favs</Nav.Link>
          <Nav.Link as={NavLink} to="/fav" className='text-light'>Cart</Nav.Link>
          <Nav.Link as={NavLink} to="/fav" className='text-light'>Order Now</Nav.Link>

          <NavDropdown title={<span className='text-light'>Enter</span>} id="navbarScrollingDropdown">
            
            <NavDropdown.Item as={NavLink} to="/login">Login</NavDropdown.Item>
            
            
            <NavDropdown.Item as={NavLink} to="/signup">Signup</NavDropdown.Item>
           
          </NavDropdown>
          
        </Nav>
        <Form  className="d-flex"  >
          <FormControl
           name="searchInput"
           value={searchInput}
           onChange={(e) => setSearchInput(e.target.value)}
            type="search"
            placeholder="Enter zip code"
            className="me-2"
            aria-label="Search"
          />
          <Button onClick={handleClick} type="submit" variant="outline-warning">Search Nearby</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
    
  </Navbar>
  )}

export default AppNavbar;
