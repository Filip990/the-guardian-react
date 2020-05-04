import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import NewsCard from "../../components/NewsCard/NewsCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import LoadMoreButton from '../../components/LoadMore/LoadMoreButton';

import { API_KEY } from "../../constants";

const SectionDetails = () => {
  const { section } = useParams();
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    // clear the news array on location change
    setNews([]);
  }, [section]);

  useEffect(() => {
    const fetchSections = async (section) => {
      setIsLoading(true);
      const res = await fetch(
        `https://content.guardianapis.com/${section}?show-fields=headline,trailText,body,thumbnail&page=${pageIndex}&page-size=30&api-key=${API_KEY}`
      );
      const json = await res.json();
      setNews((previousNewsSet) => [
        ...previousNewsSet,
        ...json.response.results,
      ]);
      setIsLoading(false);
    };

    fetchSections(section);
  }, [section, pageIndex]);

  const handleLoadMore = () => {
    // just increment the index, it will be passed to useEffect and trigger
    // it since it is one of it's dependencies
    setPageIndex((previousIndex) => previousIndex + 1);
  };


  return (
    <Container>
      <SectionHeader>{section === "search" ? "Latest" : section}</SectionHeader>
      <Row>
        {news &&
          news.map((item) => (
            <Col key={item.id}>
              <NewsCard article={item} />
            </Col>
          ))}
      </Row>
      <LoadMoreButton onClick={handleLoadMore} isLoading={isLoading} />
      <ScrollToTop />
    </Container>
  );
};

export default SectionDetails;
