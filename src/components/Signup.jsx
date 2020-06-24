import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col } from 'react-bootstrap';
import doctokid from '../img/doctokid-logo.png';
import '../App.css';

const Signin = () => {
  return (
    <section className="signin-body container">
      <div className="signin-logo">
        <img src={doctokid} alt="DoctoKid" />
      </div>
      <Form className="Form-container">
        <h2 className="mb-4">Mon profil</h2>
        <p className="psignin">
        Inscrivez-vous en quelques clics pour pouvoir vous amuser avec nous !
        </p>
        <Row>
            <Col>
            <Form.Group controlId="firstname">
              <Form.Control type="text" placeholder="Entrez votre Prénom *" />
            </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="lastname">
                <Form.Control type="text" placeholder="Entrez votre Nom *" />
              </Form.Group>
            </Col>
          </Row>
        <Form.Group controlId="email">
          <Form.Control type="email" placeholder="Entrez votre Email *" />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="Entrez votre mot de passe *"
          />
        </Form.Group>
        <div>
          <Link to="/signin">
            <button
              className="button-signup"
            >C'est Parti !</button>
          </Link>
        </div>
      </Form>
      <p className="text-center mt-4 psignin">
        Vous avez déjà un compte ?{' '}
        <a href="mailto:support@yopmail.com">Connectez-vous</a>
      </p>
    </section>
  );
};

export default Signin;
