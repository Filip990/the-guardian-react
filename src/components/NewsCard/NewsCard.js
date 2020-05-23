import React from "react";
import { Card, Button } from "react-bootstrap";

import { CardItem, CardImage, CardLink } from "./NewsCard.styled";

const NewsCard = ({ article }) => (
  <CardItem>
    <CardImage variant="top" src={article.fields?.thumbnail} />
    <Card.Body>
      <Card.Title>{article.webTitle}</Card.Title>
      <Button variant="primary">
        <CardLink to={`/${article.id}`}>Read more</CardLink>
      </Button>
    </Card.Body>
  </CardItem>
);

export default NewsCard;
