import React, { useEffect, useState } from "react";

import Grid from "../../components/Grid";
import api from "../../services/api";

import { Container, HeaderPoster } from "./styles.js";

function Landing(props) {
  const [movies, setMovies] = useState([])
  const [movieMap, setMovieMap] = useState([
    105, //"back+to+the+future
    82695, //"les+misérables"
    299536, //"avengers+infinity+war"
    68718, //"django+unchained"
    27205, //"inception
    670, //"oldboy"
  ])

  useEffect(() => {
    async function fetchData () {
      let movieList = [];
      for (var i = 0; i < movieMap.length; i++) {
        const response = await api.get(
          `${movieMap[i]}?api_key=API_KEY;`
        );
        movieList.push(response.data);
      }
      setMovies(movieList);
    };

    fetchData()
  }, [movieMap])

  return (
    <Container>
      <HeaderPoster>
        <h1>Landing Page</h1>
      </HeaderPoster>
      <Grid list={movies} />
    </Container>
  )
}

export default Landing