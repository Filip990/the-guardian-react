import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import { StyledCarousel, Caption } from "./CarouselComponent.styled";

const CarouselComponent = ({ carouselItems }) => {
  return (
    <StyledCarousel>
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id}>
          <Link to={item.id}>
            <img
              className="d-block w-100"
              src={item?.fields?.thumbnail}
              alt={item.webTitle}
            />
            <Caption>
              <h3>{item.webTitle}</h3>
              <p>{item?.fields?.trailText}</p>
            </Caption>
          </Link>
        </Carousel.Item>
      ))}
    </StyledCarousel>
  );
};

export default CarouselComponent;
