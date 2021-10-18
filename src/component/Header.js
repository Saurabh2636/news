import React, { useState } from "react";
import {  Button } from "react-bootstrap";
import { useAuth } from "./context/AuthContaxt";
import {useHistory } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import National from '../component/National/National'
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
              <Nav.Link href="/" style={{color:'white',fontSize:'3vh'}}>National</Nav.Link>
              <Nav.Link href="/int"style={{color:'white',fontSize:'3vh'}}>Health</Nav.Link>
              <Nav.Link href="/Sport"style={{color:'white',fontSize:'3vh'}}>Sports</Nav.Link>
              <Nav.Link href="/Contact"style={{color:'white',fontSize:'3vh'}}>Contact us</Nav.Link>
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
