import styled from "styled-components";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardItem = styled(Card)`
  width: 18rem;
`;

export const CardImage = styled(Card.Img)`
  width: 286px;
  height: 172px;
`;

export const CardLink = styled(Link)`
  color: white;
`;
