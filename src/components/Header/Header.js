import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navbar, Nav, Button } from "react-bootstrap";
import { HeaderLink } from "./Header.styled";
import { useAuth } from "../../utils/hooks/useAuth";

import { changeSection } from "../../pages/SectionDetails/store/actions";
import { logOut } from "../../pages/LogIn/store/actions";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const auth = useAuth();

  const handleSectionClick = () => {
    dispatch(changeSection());
    if (expanded === true) handleNavbarToggle();
  };

  const handleLogout = () => {
    auth.signout();
    dispatch(logOut());
    if (expanded === true) handleNavbarToggle();
  };

  const handleNavbarToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

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
        onClick={handleNavbarToggle}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" onClick={handleSectionClick}>
          <HeaderLink exact to="/">
            Home
          </HeaderLink>
          <HeaderLink to="/section/search">Latest</HeaderLink>
          <HeaderLink to="/section/business">Business</HeaderLink>
          <HeaderLink to="/section/world">World News</HeaderLink>
          <HeaderLink to="/section/culture">Culture</HeaderLink>
          <HeaderLink to="/section/lifeandstyle">Lifestyle</HeaderLink>
          <HeaderLink to="/search">Search</HeaderLink>
        </Nav>
        <Button onClick={handleLogout}>Sign Out</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
