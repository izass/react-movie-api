import React, { useEffect, useState } from "react";

import { searchMovies } from "../../services/api";
import Grid from "../../components/Grid";

import { Container } from "./styles.js";

function SearchResults(props) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { query } = props.match.params;
      const response = await searchMovies(query);
      setMovies(response);
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
