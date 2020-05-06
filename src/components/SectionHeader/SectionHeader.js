import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { StyledHeader, HeaderLink } from "./SectionHeader.styled";

const SectionHeader = (props) => {
  const isLinkVisible = props.isLinkVisible;
  // Move onChange into this component.. Needs diciding from where are we handling updates for this
  return (
    <StyledHeader>
      {props.children}
      {isLinkVisible && <HeaderLink to={props.link}>see all</HeaderLink>}
      {!isLinkVisible && (
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
