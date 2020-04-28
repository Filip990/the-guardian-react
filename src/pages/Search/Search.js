import React, { useState } from "react";
import { FormControl, Button, Container, Row, Col } from "react-bootstrap";

import { SearchForm } from "./Search.styled";

import NewsCard from "../../components/NewsCard/NewsCard";
import LargeSpinner from "../../components/Spinner/Spinner";
import { API_KEY } from "../../constants";

const Search = () => {
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateInputVal = (event) => {
    event.preventDefault();
    setInputVal(event.target.value);
  };

  const search = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await fetch(
      `https://content.guardianapis.com/search?q=${inputVal}&show-fields=headline,trailText,body,thumbnail&page-size=30&order-by=newest&    api-key=${API_KEY}`
    );
    const json = await res.json();
    setSearchResults(json.response.results);
    setIsLoading(false);
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
          <Row>
            {searchResults &&
              searchResults.map((item) => (
                <Col key={item.id}>
                  <NewsCard article={item} />
                </Col>
              ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Search;
