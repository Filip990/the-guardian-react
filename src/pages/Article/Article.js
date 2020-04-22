import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_KEY } from "../../constants";

const Article = (props) => {
  const { pathname } = useLocation();
  const [articleDetails, setArticleDetails] = useState(null);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const res = await fetch(
          `https://content.guardianapis.com/${pathname}?show-fields=trailText,body&api-key=${API_KEY}`
        );
        const article = await res.json();
        setArticleDetails(article);
      } catch (error) {
        setArticleDetails(error);
      }
    };

    fetchArticleDetails();
  }, [pathname]);
  console.log(articleDetails);
  return <div>radi</div>;
};

export default Article;
