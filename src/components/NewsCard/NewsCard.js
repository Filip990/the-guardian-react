import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsCard = (props) => (
  <Card className="text-center" style={{ width: "18rem" }}>
    <Card.Img
      variant="top"
      src={props?.article.fields?.thumbnail}
      style={{ width: "286px", height: "172px" }}
    />
    <Card.Body>
      <Card.Title>{props.article.webTitle}</Card.Title>
      <Button variant="primary">
        <Link to={`${props.article.id}`} style={{ color: "white" }}>
          Read more
        </Link>
      </Button>
    </Card.Body>
  </Card>
);

export default NewsCard;
