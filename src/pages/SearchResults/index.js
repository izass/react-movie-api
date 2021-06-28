import React, { useEffect, useState } from "react";

import { searchMovies } from "../../services/api";
import Grid from "../../components/Grid";
import LoadingPage from "../../components/LoadingPage";

import { Container } from "./styles.js";

function SearchResults(props) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const { query } = props.match.params;
      try {
        setLoading(true)
        const response = await searchMovies(query);
        setMovies(response);
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    };

    fetchData()
  }, [props.match.params])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <Container>
      <Grid list={movies} />
    </Container>
  );
}

export default SearchResults
