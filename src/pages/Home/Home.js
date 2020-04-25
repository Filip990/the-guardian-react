import React, { useEffect } from "react";
import { Container, Row, CardColumns } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { newsFeedRequest } from "./store/Actions";

import NewsCard from "../../components/NewsCard/NewsCard";
import CarouselComponent from "../../components/Carousel/CarouselComponent";

import { CarouselContainer, SectionHeader } from "./Home.styled";

const Home = () => {
  const { latest, lifestyle, business, world, culture } = useSelector(
    (state) => state.news
    );
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsFeedRequest());
  }, [dispatch]);
  console.log(lifestyle);
  return (
    <Container>
      <Row>
        {latest && (
          <CarouselContainer>
            <SectionHeader>Latest News: </SectionHeader>
            <CarouselComponent carouselItems={latest} />
          </CarouselContainer>
        )}

        <SectionHeader>Lifestyle: </SectionHeader>
        <Row>
          <CardColumns>
            {lifestyle &&
              lifestyle.map((item) => (
                <NewsCard key={item.id} article={item} />
              ))}
          </CardColumns>
        </Row>

        <SectionHeader>Business: </SectionHeader>
        <Row>
          <CardColumns>
            {business &&
              business.map((item) => <NewsCard key={item.id} article={item} />)}
          </CardColumns>
        </Row>

        <SectionHeader>World News: </SectionHeader>
        <Row>
          <CardColumns>
            {world &&
              world.map((item) => <NewsCard key={item.id} article={item} />)}
          </CardColumns>
        </Row>

        <SectionHeader>Culture: </SectionHeader>
        <Row>
          <CardColumns>
            {culture &&
              culture.map((item) => <NewsCard key={item.id} article={item} />)}
          </CardColumns>
        </Row>
      </Row>
    </Container>
  );
};

export default Home;
