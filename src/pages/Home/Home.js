import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { API_KEY } from "../../constants";

import NewsCard from "../../components/NewsCard/NewsCard";

const Home = (props) => {
  const [newsFeed, setNewsFeed] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://content.guardianapis.com/search?show-fields=headline,body,thumbnail&show-tags=keyword&show-blocks=body&show-elements=all&api-key=${API_KEY}`
        );
        const json = await res.json();
        setNewsFeed(json.response.results);
      } catch (error) {}
    };

    fetchData();
  }, []);
  console.log(newsFeed);
  return (
    <Container>
      <Row>
        {newsFeed.map((item) => (
          <Col key={item.id}>
            <NewsCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
