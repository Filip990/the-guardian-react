import React, { useState, useEffect } from "react";

import { ScrollToTopImg } from "./ScrollToTop.styled";
import scroll from "../../assets/scroll-top.png";

const ScrollToTop = (props) => {
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", toggleVisibility);
    return () => document.removeEventListener("scroll", toggleVisibility);
  }, []);

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
    scrollToTopVisible && (
      <ScrollToTopImg src={scroll} alt="scroll to top" onClick={scrollToTop} />
    )
  );
};

export default ScrollToTop;
