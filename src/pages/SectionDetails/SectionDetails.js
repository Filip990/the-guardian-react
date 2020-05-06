import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import NewsCard from "../../components/NewsCard/NewsCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import LoadMoreButton from "../../components/LoadMore/LoadMoreButton";

import {
  getSectionNewsRequest,
  changePageIndex,
  changeOrderBy,
} from "./store/Actions";

let prevSection = null;
let prevIndex = null;
let prevOrder = null;

const SectionDetails = () => {
  const dispatch = useDispatch();
  const { section } = useParams();
  const { sectionNews, isLoading, pageIndex, error, orderBy } = useSelector(
    (state) => state.newsBySection
  );

  useEffect(() => {
    if (
      prevSection === section &&
      prevIndex === pageIndex &&
      prevOrder === orderBy
    ) {
      return;
    }
    prevSection = section;
    prevIndex = pageIndex;
    prevOrder = orderBy;
    dispatch(getSectionNewsRequest(section, orderBy, pageIndex));
  }, [dispatch, section, orderBy, pageIndex]);

  const handleLoadMore = () => {
    dispatch(changePageIndex(pageIndex + 1));
  };

  const changeSort = (event) => {
    // if statement prevents API call if a same orderBy is clicked multiple times
    if (event !== orderBy) dispatch(changeOrderBy(event));
  };

  return (
    <Container>
      <SectionHeader
        onChange={changeSort}
        orderBy={orderBy}
        isLinkVisible={false}
      >
        {section === "search" ? "Latest" : section}
      </SectionHeader>
      <Row>
        {sectionNews &&
          sectionNews.map((item) => (
            <Col key={item.id}>
              <NewsCard article={item} />
            </Col>
          ))}
      </Row>
      <LoadMoreButton onClick={handleLoadMore} isLoading={isLoading} />
      <ScrollToTop />
      {error && <div>{error.message}</div>}
    </Container>
  );
};

export default SectionDetails;
