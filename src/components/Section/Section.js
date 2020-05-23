import React from "react";
import { Row, Col } from "react-bootstrap";

import SectionHeader from "../SectionHeader/SectionHeader";
import NewsCard from "../NewsCard/NewsCard";

const Section = (props) => {
  const { details } = props;

  return (
    <>
      <SectionHeader
        isLinkVisible={true}
        link={`section/${details.section?.id}`}
        title={details.section?.webTitle}
      />
      <Row>
        {details.results &&
          details.results.map((article) => (
            <Col key={article.id}>
              <NewsCard article={article} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Section;
