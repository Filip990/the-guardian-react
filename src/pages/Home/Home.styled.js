import styled from "styled-components";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CarouselContainer = styled(Row)`
  width: 100%;
  margin: 2% auto 2%;
  font-style: oblique;
`;

export const SectionHeader = styled.h3`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: initial;
  font-style: oblique;
  background: #88c8e4;
  color: white;
  font-weight: 600;
  padding: 8px 8px 0;
  border-bottom: 12px solid #007bff;
`;

export const HeaderLink = styled(Link)`
  color: white;
  font-size: 20px;
  text-decoration: none;
`;
