import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import NewsCard from "../../components/NewsCard/NewsCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Spinner from "../../components/Spinner/Spinner";

import { API_KEY } from "../../constants";

const SectionDetails = (props) => {
  const { section } = useParams();
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSections = async (section) => {
      setIsLoading(true);
      const res = await fetch(
        `https://content.guardianapis.com/${section}?show-fields=headline,trailText,body,thumbnail&page-size=20&api-key=${API_KEY}`
      );
      const json = await res.json();
      setNews(json.response.results);
      setIsLoading(false);
    };

    fetchSections(section);
  }, [section]);

  return (
    <Container>
      <SectionHeader> {section}</SectionHeader>
      {isLoading ? (
        <Spinner />
      ) : (
        <Row>
          {news &&
            news.map((item) => (
              <Col key={item.id}>
                <NewsCard article={item} />
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default SectionDetails;
