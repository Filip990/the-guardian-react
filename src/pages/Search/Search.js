import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, Button, Container, Row, Col } from "react-bootstrap";

import { SearchForm } from "./Search.styled";

import NewsCard from "../../components/NewsCard/NewsCard";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import LoadMoreButton from "../../components/LoadMore/LoadMoreButton";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import {
  searchNewsRequest,
  updateInputValue,
  termChange,
} from "./store/Actions";
import { changeOrderBy } from "../../store/Actions";

const Search = () => {
  const dispatch = useDispatch();
  const inputElement = useRef(null);
  const {
    results,
    isLoading,
    error,
    inputValue,
    searchTerm,
    orderBy,
    pageIndex,
  } = useSelector((state) => state.searchResults);

  useEffect(() => {
    // focus input on page load
    inputElement.current.focus();
  }, []);

  const updateInputVal = (event) => {
    dispatch(updateInputValue(event.target.value));
  };

  const handleLoadMore = () => {
    dispatch(searchNewsRequest(inputValue, pageIndex + 1, orderBy));
  };

  const search = () => {
    dispatch(termChange()); // term change will clear the results array...
    dispatch(searchNewsRequest(inputValue, pageIndex, orderBy)); // .. so we can repopulate it here...
    //...with fresh data
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputValue.length > 0) search();
  };

  const changeSort = (event) => {
    // if statement prevents API call if a same orderBy is clicked multiple times
    if (event !== orderBy) {
      dispatch(changeOrderBy(event));
      dispatch(searchNewsRequest(inputValue, pageIndex, event));
    }
  };

  return (
    <>
      <SearchForm onSubmit={(e) => e.preventDefault()}>
        <FormControl
          type="search"
          onChange={updateInputVal}
          value={inputValue}
          ref={inputElement}
          placeholder="Search news from around the world"
          className="mr-sm-2"
          onKeyPress={handleKeyPress}
        />
        <Button
          variant="outline-info"
          onClick={search}
          disabled={!inputValue.length}
        >
          Search
        </Button>
      </SearchForm>
      <Container>
        {results.length > 0 && (
          <SectionHeader
            isLinkVisible={false}
            orderBy={orderBy}
            onChange={changeSort}
          >
            Showing results for {searchTerm}
          </SectionHeader>
        )}
        <Row>
          {results &&
            results.map((item) => (
              <Col key={item.id}>
                <NewsCard article={item} />
              </Col>
            ))}
        </Row>
        {(isLoading || results.length > 0) && (
          <LoadMoreButton onClick={handleLoadMore} isLoading={isLoading} />
        )}
        {error && <div>{error.message}</div>}
        <ScrollToTop />
      </Container>
    </>
  );
};

export default Search;
