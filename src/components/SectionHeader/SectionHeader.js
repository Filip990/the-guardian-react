import React from "react";
import { Dropdown } from "react-bootstrap";

import {
  StyledHeader,
  HeaderLink,
  StyledDropDown,
} from "./SectionHeader.styled";

const SectionHeader = ({ title, link, isLinkVisible, orderBy, onChange }) => {
  return (
    <StyledHeader>
      {title}
      {isLinkVisible && <HeaderLink to={link}>see all</HeaderLink>}
      {!isLinkVisible && (
        <StyledDropDown
          id="dropdown-item-button"
          variant="primary"
          title={`Sort by: ${orderBy}`}
          onSelect={onChange}
        >
          <Dropdown.Item as="button" eventKey="newest">
            Newest
          </Dropdown.Item>
          <Dropdown.Item as="button" eventKey="relevance">
            Relevance
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
