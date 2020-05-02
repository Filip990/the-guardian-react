import styled from "styled-components";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardItem = styled(Card)`
  margin-bottom: 2rem;
`;

export const CardImage = styled(Card.Img)`
  width: 286px;
  height: 172px;
  align-self: center;
`;

export const CardLink = styled(Link)`
  color: white;

  :hover {
    color: white;
    text-decoration: none;
  }
`;
