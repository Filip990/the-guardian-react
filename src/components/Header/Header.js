import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HeaderLink } from "./Header.styled";

const Header = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Navbar.Brand>TheGuardian</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() =>
          setExpanded((prevExpanded) => (prevExpanded = !prevExpanded))
        }
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" onClick={() => setExpanded(false)}>
          <HeaderLink exact to="/">
            Home
          </HeaderLink>
          <HeaderLink to="/section/business">Business</HeaderLink>
          <HeaderLink to="/section/world">World News</HeaderLink>
          <HeaderLink to="/section/culture">Culture</HeaderLink>
          <HeaderLink to="/section/lifeandstyle">Lifestyle</HeaderLink>
          <HeaderLink to="/search">Search</HeaderLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
