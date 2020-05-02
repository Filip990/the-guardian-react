import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";

import NewsCard from "../../components/NewsCard/NewsCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { LoadMoreBtn, ScrollToTopImg } from "./SectionDetails.styled";

import { API_KEY } from "../../constants";
import scroll from "../../assets/scroll-top.png";

const SectionDetails = (props) => {
  const { section } = useParams();
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageIndex, setPageIndex] = useState(1);
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  useEffect(() => {
    // clear the news array on location change
    setNews([]);
  }, [section]);

  useEffect(() => {
    document.addEventListener("scroll", toggleVisibility);
    return () => document.removeEventListener("scroll", toggleVisibility);
  }, []);

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

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setScrollToTopVisible(true);
    } else {
      setScrollToTopVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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

      <LoadMoreBtn onClick={handleLoadMore}>
        {isLoading && (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}{" "}
        {isLoading ? "Loading" : " Load More"}
      </LoadMoreBtn>
      {scrollToTopVisible && (
        <ScrollToTopImg
          src={scroll}
          alt=""
          className="scroll-top"
          onClick={scrollToTop}
        />
      )}
    </Container>
  );
};

export default SectionDetails;
