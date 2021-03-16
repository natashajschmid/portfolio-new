import React, { useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
  const [key, setKey] = useState('1')

  return (
    <Navbar className="main-nav">
      <LinkContainer to="/">
        <Navbar.Brand className="d-none d-sm-block natasha" onClick={() => setKey('1')}>Natasha Schmid</Navbar.Brand>
      </LinkContainer>
      <Navbar className="px-0" id="basic-navbar-nav">
        <Nav onSelect={setKey} activeKey={key}>
          <LinkContainer to="/" exact activeClassName="active-link">
            <Nav.Link className="ml-4 nav-link" eventKey="1">Work</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about" exact activeClassName="active-link">
            <Nav.Link className="ml-4 nav-link" eventKey="2">About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/resume" exact activeClassName="active-link">
            <Nav.Link className="ml-4 nav-link" eventKey="3">Resume</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </Navbar>
  );
}

export default NavBar