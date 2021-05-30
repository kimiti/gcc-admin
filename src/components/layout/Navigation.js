import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">GCC-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                {" "}
                <Link to="/login">Login</Link>{" "}
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/register">Register</Link>{" "}
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/uploadvideo">Upload Video</Link>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
