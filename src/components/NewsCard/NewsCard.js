import React from "react";
import { Card, Button } from "react-bootstrap";

const NewsCard = (props) => {
  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props?.fields?.thumbnail} />
      <Card.Body>
        <Card.Title>{props.webTitle}</Card.Title>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
