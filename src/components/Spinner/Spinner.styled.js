import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  position: fixed;
  top: calc(50% - (80px / 2));
  right: calc(50% - (80px / 2));
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  margin: auto;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
`;
