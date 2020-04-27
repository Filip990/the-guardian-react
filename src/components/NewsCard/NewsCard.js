import React from "react";
import { Card, Button } from "react-bootstrap";

import { CardItem, CardImage, CardLink } from "./NewsCard.styled";

const NewsCard = (props) => (
  <CardItem className="text-center">
    <CardImage variant="top" src={props?.article.fields?.thumbnail} />
    <Card.Body>
      <Card.Title>{props.article.webTitle}</Card.Title>
      <Button variant="primary">
        <CardLink to={`/${props.article.id}`}>Read more</CardLink>
      </Button>
    </Card.Body>
  </CardItem>
);

export default NewsCard;
