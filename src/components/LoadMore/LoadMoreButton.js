import React from 'react';
import {  Spinner } from "react-bootstrap";


import {LoadMoreBtn} from './LoadMoreButton.styled';

const LoadMoreButton = (props) => {

const isLoading = props.isLoading;

  return (
    <LoadMoreBtn onClick={props.onClick}>
    {isLoading && (
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    )}{" "}
    {isLoading ? "Loading" : " Load More"}
  </LoadMoreBtn>
  );
};

export default LoadMoreButton;
