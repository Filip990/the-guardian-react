import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { HeaderLink } from "./Header.styled";

const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">TheGuardian</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <HeaderLink exact to="/">
            Home
          </HeaderLink>
          <HeaderLink to="/section/business">Business</HeaderLink>
          <HeaderLink to="/section/world">World News</HeaderLink>
          <HeaderLink to="/section/culture">Culture</HeaderLink>
          <HeaderLink to="/section/lifeandstyle">Lifestyle</HeaderLink>
        </Nav>
        <Form inline>
          <FormControl type="search" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
