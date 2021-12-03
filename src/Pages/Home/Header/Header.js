import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import './Header.css'
import logo from '../../../All-Images & logos/bg & logos/logo2.png'
const Header = () => {
    return (
        <div className='nav-var'>
           <>
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home"><img width='150px' src={logo} alt="" /></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
             <button className='rounded-pill search-btn'>sign in </button>
    </Container>
          </Navbar>
          <div className="banner-img">
            <div >
               <h2 className='head-text'>Best food waiting for your belly...</h2>
              <input className='rounded-pill search-input' type="text" placeholder='search food items' />
            <button className='rounded-pill search-btn'>Search</button>
            </div>
          </div>
          
          <br />
           <Navbar bg="light" variant="light">
    <Container className="route-var">
    </Container>
    <Container className="route-var">
    </Container>
    <Container className="route-var">
    <Nav className="me-auto ">
      <Nav.Link className="bf-route" href="#breakfast">Breakfast</Nav.Link>
      <Nav.Link className="lunch-route" href="#lunch">Lunch</Nav.Link>
      <Nav.Link className="dnr-route" href="#dinner">Dinner</Nav.Link>
    </Nav>
    </Container>
    <Container className="route-var">
    </Container>
    <Container className="route-var">
    </Container>
  </Navbar>
</>
        
        </div>
    );
};

export default Header;                                                                                                                                                                                                                                                                                           