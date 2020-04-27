import React from "react";

import { StyledHeader, HeaderLink } from "./SectionHeader.styled";
import { useLocation } from "react-router-dom";

const SectionHeader = (props) => {
  const { pathname } = useLocation();
  const isVisible = pathname.includes("/section");

  return (
    <StyledHeader>
      {props.children}
      {!isVisible && <HeaderLink to={props.link}>see all</HeaderLink>}
    </StyledHeader>
  );
};

export default SectionHeader;
