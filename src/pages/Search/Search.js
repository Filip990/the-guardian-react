import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, Button, Container, Row, Col } from "react-bootstrap";

import { SearchForm } from "./Search.styled";

import NewsCard from "../../components/NewsCard/NewsCard";
import LargeSpinner from "../../components/Spinner/Spinner";

import { searchNewsRequest } from "./store/Actions";

const Search = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const { results, isLoading, error } = useSelector(
    (state) => state.searchResults
  );

  const updateInputVal = (event) => {
    setInputVal(event.target.value);
  };

  const search = async (event) => {
    dispatch(searchNewsRequest(inputVal));
  };

  return (
    <>
      <SearchForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormControl
          type="search"
          onChange={updateInputVal}
          value={inputVal}
          placeholder="Search news from around the world"
          className="mr-sm-2"
        />
        <Button
          variant="outline-info"
          onClick={search}
          disabled={inputVal.length === 0}
        >
          Search
        </Button>
      </SearchForm>
      <Container>
        {isLoading ? (
          <LargeSpinner />
        ) : (
          <>
            <Row>
              {results &&
                results.map((item) => (
                  <Col key={item.id}>
                    <NewsCard article={item} />
                  </Col>
                ))}
            </Row>
          </>
        )}
        {error && <div>{error.message}</div>}
      </Container>
    </>
  );
};

export default Search;
