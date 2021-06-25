import React, { useEffect, useState } from "react";

// import "./style.css";

import apiQuery from "../../services/apiQuery";
import Grid from "../../components/Grid";

import { Container } from "./styles.js";

function SearchResults(props) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { query } = props.match.params;
      const response = await apiQuery.get(query);
      setMovies(response.data.results);
    };

    fetchData()
  }, [props.match.params])

  return (
    <Container>
      <Grid list={movies} />
    </Container>
  );
}

export default SearchResults
