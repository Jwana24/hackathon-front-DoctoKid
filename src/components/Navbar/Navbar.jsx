import React, { Navlink}  from 'react';
import { Button, Navbar } from 'react-bootstrap/Navbar'
import './Navbar.css'


const Navbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Dinhospital</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Le dino-quizz</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
                <Form inline>
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
</Navbar>
  
    )
}

export default Navbar;
