import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { StyledHeader, HeaderLink } from "./SectionHeader.styled";
import { useLocation } from "react-router-dom";

const SectionHeader = (props) => {
  const { pathname } = useLocation();
  const isVisible = pathname.includes("/section");

  return (
    <StyledHeader>
      {props.children}
      {!isVisible && <HeaderLink to={props.link}>see all</HeaderLink>}
      {isVisible && (
        <DropdownButton
          id="dropdown-item-button"
          variant="primary"
          title={`Sort by: ${props.orderBy}`}
          onSelect={props.onChange}
        >
          <Dropdown.Item as="button" eventKey="newest">
            Newest
          </Dropdown.Item>
          <Dropdown.Item as="button" eventKey="relevance">
            Most Relevant
          </Dropdown.Item>
          <Dropdown.Item as="button" eventKey="oldest">
            Oldest
          </Dropdown.Item>
        </DropdownButton>
      )}
    </StyledHeader>
  );
};

export default SectionHeader;
