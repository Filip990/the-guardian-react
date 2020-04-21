import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { newsFeedRequest } from "./store/Actions";

import NewsCard from "../../components/NewsCard/NewsCard";

const Home = () => {
  const newsFeed = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsFeedRequest());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        {newsFeed &&
          newsFeed.map((item) => (
            <Col key={item.id}>
              <NewsCard article={item} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Home;
