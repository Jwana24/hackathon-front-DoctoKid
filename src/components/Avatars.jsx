import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dino1 from '../img/dino1.png';
import Dino2 from '../img/dino2.png';
import Dino3 from '../img/dino3.png';
import Dino4 from '../img/dino4.png';
import '../App.css';
import { Button, Modal } from 'react-bootstrap';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Avatars = () => {

  const [show, setShow] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleClose = () => {
    setShow(false);
  };

  const chooseAvatar = () => {
    localStorage.setItem('avatar_id', avatar)
  }

  return (
    <>
      <Modal size="md" show={show} onHide={() => handleClose()} centered>
        <Modal.Body>
          Es-tu sûr de choisir ce Dino ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => handleClose()}>
            Non
          </Button>
          <Link to={`/quizz/${avatar}`}>
            <Button onClick={chooseAvatar} variant="outline-danger">
              Oui !
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      <section className="avatars-body container">
        <h2 className="mb-4 text-center">Choisi ton Dino !</h2>
        <div className="card-group">
          <div className="card-body card1 col-md-3">
            <div className="card-img">
              <img src={Dino1} alt="Dino1"/>
            </div>
            <div className="text-center">
            <button className="button-avatar" onClick={() => {setShow(true);setAvatar(1)}}>
              A moi !
            </button>
            </div>
          </div>
          <div className="card-body card2 col-md-3">
            <div className="card-img">
              <img src={Dino2} alt="Dino2"/>
            </div>
            <div className="text-center">
            <button className="button-avatar" onClick={() => {setShow(true);setAvatar(2)}}>
              A moi !
            </button>
            </div>
          </div>
          <div className="card-body card3 col-md-3">
            <div className="card-img">
              <img src={Dino3} alt="Dino3"/>
            </div>
            <div className="text-center">
            <button className="button-avatar" onClick={() => {setShow(true);setAvatar(3)}}>
              A moi !
            </button>
            </div>
          </div>
          <div className="card-body card4 col-md-3">
            <div className="card-img">
              <img src={Dino4} alt="Dino4"/>
            </div>
            <div className="text-center">
            <button className="button-avatar" onClick={() => {setShow(true);setAvatar(4)}}>
              A moi !
            </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Avatars;