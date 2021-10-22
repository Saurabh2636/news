import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "./context/AuthContaxt";
import { Link, useHistory } from "react-router-dom";
const Login = () => {
  const emailRef = useRef();
  const PasswordRef = useRef();
  const { login } = useAuth();
  const history = useHistory();
  const [error, setError] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      await login(emailRef.current.value, PasswordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in!");
    }
  }
  return (
    <>
      <Container  style={{maxWidth:'80vh', marginTop:'25vh'}}>
        <Card >
          <Card.Body>
            <h2 className="text-center mb-4 ">Log in</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={PasswordRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Button className="w-100 mt-4" type="submit">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2" style={{color:'white'}}>
          Need an account ? <Link to="/signup">Sign up</Link>
        </div>
      </Container>
    </>
  );
};

export default Login;
