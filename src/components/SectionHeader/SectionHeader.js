import React from "react";
import { Dropdown } from "react-bootstrap";

import {
  StyledHeader,
  HeaderLink,
  StyledDropDown,
} from "./SectionHeader.styled";

const SectionHeader = (props) => {
  const { isLinkVisible } = props;

  return (
    <StyledHeader>
      {props.children}
      {isLinkVisible && <HeaderLink to={props.link}>see all</HeaderLink>}
      {!isLinkVisible && (
        <StyledDropDown
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
        </StyledDropDown>
      )}
    </StyledHeader>
  );
};

export default SectionHeader;
