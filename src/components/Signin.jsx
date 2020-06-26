import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import doctodino from '../img/doctodino.png';
import '../App.css';

const Signin = () => {

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <section className="signin-body container">
      <div className="signin-logo">
        <img src={doctodino} alt="DoctoDino" />
      </div>
      <Form className="Form-container">
        <h2 className="mb-4 text-center">Je me connecte</h2>
        <p className="psignin text-center">
        Connectez-vous avec vos identifiants.
        </p>
        <Form.Group onChange={onChange}>
          <Form.Control type="email" name="email" placeholder="Entrez votre Email *" />
        </Form.Group>
        <Form.Group onChange={onChange}>
          <Form.Control
            type="password"
            name="password"
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
