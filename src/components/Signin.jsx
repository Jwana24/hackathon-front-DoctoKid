import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import doctokid from '../img/doctokid-logo.png';
import '../App.css';

const Signin = () => {
  return (
    <section className="signin-body container">
      <div className="signin-logo">
        <img src={doctokid} alt="DoctoKid" />
      </div>
      <Form className="Form-container">
        <h2 className="mb-4 text-center">Je me connecte</h2>
        <p className="psignin text-center">
        Connectez-vous avec vos identifiants.
        </p>
        <Form.Group controlId="email">
          <Form.Control type="email" placeholder="Entrez votre Email *" />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="Entrez votre mot de passe *"
          />
        </Form.Group>
        <div className="text-center">
          <Link to="/signin">
            <button
              className="button-signup"
            >Je me connecte</button>
          </Link>
        </div>
      </Form>
      <p className="text-center mt-4 psignin">
        Vous n'avez pas de compte ?{' '}
        <Link to="/">
          Inscrivez-vous
        </Link>
      </p>
    </section>
  );
};

export default Signin;
