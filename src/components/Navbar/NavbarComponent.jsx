import React  from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import logo from"../../img/doctodino.png";
import './Navbar.css';


const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;
const stratTime = Date.now();
const endTime = stratTime + 243248;
const getTimeMinutes = time => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeSeconds = time => (minuteSeconds - time / 1000) | 0;

const timerProps = {
    isPlaying: true,
    size: 90,
    strokeWidth: 8
  };
  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

const NavbarComponent = () => {
    return (    
        <Navbar bg="light" expand="lg" className="Navbar-container">
            <div className="container">
            <Navbar.Brand href="/home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <img src={logo} alt="logo" className="Navbar-logo"/>
                <h3 className="Navbar-title">DoctoDino</h3>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/signin" className="Navbar-link">Accueil</Nav.Link>
                    <Nav.Link href="/quizz" className="Navbar-link">Le dino-quizz</Nav.Link>
                    <Nav.Link href="/puzzle" className="Navbar-link">Les dino-jeux</Nav.Link>
                    <Nav.Link href="/team" className="Navbar-link">l'équipe de DoctoDino</Nav.Link>
                    <div className="big-timer-container">
                    <div className="timer-container">

                    <CountdownCircleTimer
                        {...timerProps}
                        colors={[["#EF798A"]]}
                        duration={hourSeconds}
                        initialRemainingTime={remainingTime % hourSeconds}
                        onComplete={totalElapsedTime => [
                        remainingTime - totalElapsedTime > minuteSeconds
                        ]}
                    >
                        {({ elapsedTime }) =>
                        renderTime(
                            "minutes",
                            getTimeMinutes(hourSeconds - elapsedTime / 1000)
                        )
                        }
                    </CountdownCircleTimer>
                    </div>
                    <div className="timer-container">
                    <CountdownCircleTimer
        {...timerProps}
        colors={[["#218380"]]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > 0]}
      >
        {({ elapsedTime }) =>
          renderTime("secondes", getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
                    </div>
                    </div>
                </Nav>    
            </Navbar.Collapse>
            </div>
            
        </Navbar>
        
    )
}

export default NavbarComponent;
