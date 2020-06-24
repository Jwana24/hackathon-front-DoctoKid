import React from 'react';
// import { Link } from 'react-router-dom';
import Dino1 from '../img/dino1.png';
import Dino2 from '../img/dino2.png';
import Dino3 from '../img/dino3.png';
import Dino4 from '../img/dino4.png';
import '../App.css';

const Avatars = () => {

  return (
    <section className="avatars-body container">
      <h2 className="mb-4 text-center">Choisi ton Dino !</h2>
      <div className="card-group">
        <div className="card-body card1 col-md-3">
          <div className="card-img">
            <img src={Dino1} alt="Dino1"/>
          </div>
          <div className="text-center">
          <button className="button-avatar">
            A moi !
          </button>
          </div>
        </div>
        <div className="card-body card2 col-md-3">
          <div className="card-img">
            <img src={Dino2} alt="Dino2"/>
          </div>
          <div className="text-center">
          <button className="button-avatar">
            A moi !
          </button>
          </div>
        </div>
        <div className="card-body card3 col-md-3">
          <div className="card-img">
            <img src={Dino3} alt="Dino3"/>
          </div>
          <div className="text-center">
          <button className="button-avatar">
            A moi !
          </button>
          </div>
        </div>
        <div className="card-body card4 col-md-3">
          <div className="card-img">
            <img src={Dino4} alt="Dino4"/>
          </div>
          <div className="text-center">
          <button className="button-avatar">
            A moi !
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avatars;