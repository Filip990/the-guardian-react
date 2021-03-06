import styled from "styled-components";
import { Link } from "react-router-dom";
import { DropdownButton } from "react-bootstrap";

export const StyledHeader = styled.h3`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  margin-top: 2%;
  width: 100%;
  text-align: initial;
  font-style: oblique;
  background: #88c8e4;
  color: white;
  font-weight: 600;
  padding: 8px 8px 0;
  border-bottom: 12px solid #007bff;
`;

export const StyledDropDown = styled(DropdownButton)`
  .btn {
    border-radius: 0;
  }
`;

export const HeaderLink = styled(Link)`
  color: white;
  font-size: 20px;
  text-decoration: none;
`;
