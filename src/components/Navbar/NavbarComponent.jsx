import React  from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import logo from"../../img/logo.png"
import './Navbar.css'

const UrgeWithPleasureComponent = () => (
    <CountdownCircleTimer
        isPlaying
        duration={10}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>


const NavbarComponent = () => {
    return (
        
        <Navbar bg="light" expand="lg" className="Navbar-container">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <img src={logo} alt="logo" className="Navbar-logo"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#quizz" className="Navbar-link">Le dino-quizz</Nav.Link>
                    <Nav.Link href="#games" className="Navbar-link">Les dino-jeux</Nav.Link>
                    <Nav.Link href="#team" className="Navbar-link">l'équipe de Doctokid</Nav.Link>
                </Nav>    
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;
