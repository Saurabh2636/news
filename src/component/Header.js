import React, { useState } from "react";
import {  Button } from "react-bootstrap";
import { useAuth } from "./context/AuthContaxt";
import {Link,useHistory } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'

const Header = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  async function handleLogout() {
    setError("")
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" style={{color:'white',fontSize:'4vh'}}>Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" style={{color:'white',fontSize:'3vh'}} activeStyle={{color: 'red'}}>National</Link>
              <Link to="/int"style={{color:'white',fontSize:'3vh'}} activeStyle={{color: 'red'}}>Health</Link>
              <Link to="/Sport"style={{color:'white',fontSize:'3vh'}} activeStyle={{color: 'red'}}>Sports</Link>
              <Link to="/Contact"style={{color:'white',fontSize:'3vh'}} activeStyle={{color: 'red'}}>Contact us</Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success" onClick={handleLogout}>Log out</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </>
  );
};

export default Header;
