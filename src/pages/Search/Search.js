import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, Button, Container, Row, Col } from "react-bootstrap";

import { SearchForm } from "./Search.styled";

import NewsCard from "../../components/NewsCard/NewsCard";
import LargeSpinner from "../../components/Spinner/Spinner";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'

import { searchNewsRequest, updateInputValue } from "./store/Actions";

const Search = () => {
  const dispatch = useDispatch();
  const inputElement = useRef(null);
  const { results, isLoading, error, inputValue } = useSelector(
    (state) => state.searchResults
  );

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const updateInputVal = (event) => {
    dispatch(updateInputValue(event.target.value));
  };

  const search = () => {
    dispatch(searchNewsRequest(inputValue));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputValue.length > 0) search();
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
        {isLoading ? (
          <LargeSpinner />
        ) : (
          <Row>
            {results &&
              results.map((item) => (
                <Col key={item.id}>
                  <NewsCard article={item} />
                </Col>
              ))}
          </Row>
        )}
        {error && <div>{error.message}</div>}
        <ScrollToTop />
      </Container>
    </>
  );
};

export default Search;
