import React from "react";
import { Row, Col } from "react-bootstrap";

import SectionHeader from "../SectionHeader/SectionHeader";
import NewsCard from "../NewsCard/NewsCard";

const Section = (props) => {
  const { details } = props;

  return (
    <>
      <SectionHeader link={`section/${details.section?.id}`}>
        {details.section?.webTitle}
      </SectionHeader>
      <Row>
        {details.results &&
          details.results.map((item) => (
            <Col key={item.id}>
              <NewsCard article={item} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Section;
