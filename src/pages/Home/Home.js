import React, { useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { newsFeedRequest } from "./store/Actions";

import NewsCard from "../../components/NewsCard/NewsCard";
import CarouselComponent from "../../components/Carousel/CarouselComponent";

import { CarouselContainer, SectionHeader, HeaderLink } from "./Home.styled";

const Home = () => {
  const [latest, lifeandstyle, business, world, culture] = useSelector(
    (state) => state.news
  );
  const { isLoading } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsFeedRequest());
  }, [dispatch]);

  return isLoading ? (
    <Container>
      <Spinner animation="border" size="lg" />
    </Container>
  ) : (
    <Container>
      <Row>
        {latest && (
          <CarouselContainer>
            <SectionHeader>
              Latest News
              <HeaderLink to="section/search">see all</HeaderLink>
            </SectionHeader>
            <CarouselComponent carouselItems={latest} />
          </CarouselContainer>
        )}

        <SectionHeader>
          Business
          <HeaderLink to="section/business">see all </HeaderLink>
        </SectionHeader>
        <Row>
          {business &&
            business.map((item) => (
              <Col key={item.id}>
                <NewsCard article={item} />
              </Col>
            ))}
        </Row>

        <SectionHeader>
          World News
          <HeaderLink to="section/world">see all</HeaderLink>
        </SectionHeader>
        <Row>
          {world &&
            world.map((item) => (
              <Col key={item.id}>
                <NewsCard article={item} />
              </Col>
            ))}
        </Row>

        <SectionHeader>
          Culture
          <HeaderLink to="section/culture">see all</HeaderLink>
        </SectionHeader>
        <Row>
          {culture &&
            culture.map((item) => (
              <Col key={item.id}>
                <NewsCard article={item} />
              </Col>
            ))}
        </Row>

        <SectionHeader>
          Lifestyle
          <HeaderLink to="section/lifeandstyle">see all</HeaderLink>
        </SectionHeader>
        <Row>
          {lifeandstyle &&
            lifeandstyle.map((item) => (
              <Col key={item.id}>
                <NewsCard article={item} />
              </Col>
            ))}
        </Row>
      </Row>
    </Container>
  );
};

export default Home;
