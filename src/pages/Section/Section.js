import React, { useEffect, useState } from "react";
import { API_KEY } from "../../constants";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import NewsCard from "../../components/NewsCard/NewsCard";

const Section = (props) => {
  const { section } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchSections = async (section) => {
      const res = await fetch(
        `https://content.guardianapis.com/${section}?show-fields=headline,trailText,body,thumbnail&page-size=20&api-key=${API_KEY}`
      );
      const json = await res.json();
      setNews(json.response.results);
    };

    fetchSections(section);
  }, [section]);
  console.log(news);
  return (
    <Container>
      <h1>{section.toUpperCase()}</h1>
      <Row>
        {news &&
          news.map((item) => (
            <Col key={item.id}>
              <NewsCard article={item} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Section;
