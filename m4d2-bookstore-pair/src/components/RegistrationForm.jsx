import { useState } from "react";
import { Button, Col, Container, Form, Spinner, Row } from "react-bootstrap";

const RegistrationForm = () => {
    const [registration, setRegistration] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        isLoading: false
    })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('frau blucher hiiiiii')
    // setRegistration
  }

  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setRegistration(e.target.value)}
                value={registration.name}
                placeholder="Frau"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setRegistration(e.target.value)}
                value={registration.surname}
                placeholder="Blücher"
              />
            </Form.Group>

            <Form.Group>
            <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setRegistration(e.target.value)}
                value={registration.email}
                placeholder="frau@blücher@yahiih.com"
              />
            </Form.Group>

            <Form.Group>
            <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setRegistration(e.target.value)}
                value={registration.password}
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setRegistration(e.target.value)}
                value={registration.password}
                placeholder="Password"
              />
            </Form.Group>

            <Button
            //   disabled={isLoading}
              type="submit"
              variant="primary"
            >
                { registration.isLoading && <Spinner animation="border" variant="light"/> }
                Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;

// import React, { Component } from 'react';

// class RegistrationForm extends Component {
//     render() {
//         return (
//             <h1>
//                 FUUUUUCK YEEEEES
//             </h1>
//         );
//     }
// }

// export default RegistrationForm;
