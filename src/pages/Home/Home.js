import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { newsFeedRequest } from "./store/Actions";

import CarouselComponent from "../../components/Carousel/CarouselComponent";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Section from "../../components/Section/Section";
import Spinner from "../../components/Spinner/Spinner";

import { CarouselContainer } from "./Home.styled";

const Home = () => {
  const [latest, lifeandstyle, business, world, culture] = useSelector(
    (state) => state.newsFeed.news
  );
  const { isLoading } = useSelector((state) => state.newsFeed);
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
            <SectionHeader isLinkVisible={true} link="section/search">
              Latest News
            </SectionHeader>
            <CarouselComponent carouselItems={latest.results} />
          </CarouselContainer>
        )}

        <Section details={business} />
        <Section details={world} />
        <Section details={culture} />
        <Section details={lifeandstyle} />
      </Row>
    </Container>
  );
};

export default Home;
