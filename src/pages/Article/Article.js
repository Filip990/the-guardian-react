import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

import { API_KEY } from "../../constants";

const Article = (props) => {
  const { pathname } = useLocation();
  const [articleDetails, setArticleDetails] = useState(null);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const res = await fetch(
          `https://content.guardianapis.com/${pathname}?show-fields=trailText,hasStoryPackage,thumbnail,body&api-key=${API_KEY}`
        );
        const { response } = await res.json();
        setArticleDetails(response.content);
      } catch (error) {
        return error;
      }
    };

    fetchArticleDetails();
  }, [pathname]);

  return (
    <Container>
      <Row>
        <Col>
          <h1>{articleDetails?.webTitle}</h1>
          <Image src={articleDetails?.fields?.thumbnail} />
          {/*dangerouslySetInnerHTML is the only sensible thing to use here since the text
           returned from the API contains a lot of HTML and depends on it heavily   */}
          <div
            dangerouslySetInnerHTML={{
              __html: articleDetails?.fields?.body,
            }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Article;
