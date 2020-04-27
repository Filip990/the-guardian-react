import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  margin-left: 1em;
  color: #bdb3b3;
  padding: 4px;

  :hover {
    color: white;
    border-bottom: 3px solid #2196f3;
    text-decoration: none;
  }
  &.active {
    color: white;
    border-bottom: 3px solid #2196f3;
  }
`;
