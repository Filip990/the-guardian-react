import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { HeaderLink } from "./Header.styled";

import { changeSection } from "../../pages/SectionDetails/store/Actions";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  const handleSectionClick = () => {
    dispatch(changeSection());
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
        onClick={() =>
          setExpanded((prevExpanded) => (prevExpanded = !prevExpanded))
        }
      />
      <Navbar.Collapse id="basic-navbar-nav" onClick={handleSectionClick}>
        <Nav className="mr-auto" onClick={() => setExpanded(false)}>
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
