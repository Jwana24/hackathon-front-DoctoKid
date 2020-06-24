import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col } from 'react-bootstrap';
import doctokid from '../img/doctokid-logo.png';
import '../App.css';

const Signin = () => {

  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
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
        <img src={doctokid} alt="DoctoKid" />
      </div>
      <Form className="Form-container">
        <h2 className="mb-4 text-center">Mon profil</h2>
        <p className="psignin text-center">
        Inscrivez-vous en quelques clics pour pouvoir vous amuser avec nous !
        </p>
        <Row>
            <Col>
            <Form.Group onChange={onChange}>
              <Form.Control type="text" name="firstname" placeholder="Entrez votre Prénom *" />
            </Form.Group>
            </Col>
            <Col>
              <Form.Group onChange={onChange}>
                <Form.Control type="text" name="lastname" placeholder="Entrez votre Nom *" />
              </Form.Group>
            </Col>
          </Row>
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
            >C'est Parti !</button>
          </Link>
        </div>
      </Form>
      <p className="text-center mt-4 psignin">
      Vous avez déjà un compte ?{' '}
        <Link to="/signin">
        Connectez-vous
        </Link>
      </p>
    </section>
  );
};

export default Signin;
