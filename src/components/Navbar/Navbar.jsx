import React from 'react';
import { Navbar, Button, Nav,  } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        
        <div>
            <Navbar bg="light" expand="lg">
                <div>
                <Navbar.Brand href="#home">Dinhospital</Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#link">Dino-Quizz</Nav.Link>
                        <Nav.Link href="#link">Dino-puzzle</Nav.Link>
                        <Nav.Link href="#link">A propos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    )
}


export default NavbarComponent  