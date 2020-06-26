import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="Navbar">
                <div className="container">
                <div>
                <Navbar.Brand href="#home" className="brand-font">DoctoDino</Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#link">Dino-Quizz</Nav.Link>
                        <Nav.Link href="#link">Dino-puzzle</Nav.Link>
                        <Nav.Link href="#link">L'équipe de DoctoDino</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
};


export default NavbarComponent;