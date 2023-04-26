import React, { useEffect, useState } from "react";

import MoviesGrid from "../../components/MoviesGrid";
import { getMovie } from "../../services/api";

import { Container, Hero, Title, GradientContainer } from "./styles.js";

const moviesId = [
  105, //"back+to+the+future
  82695, //"les+misérables"
  299536, //"avengers+infinity+war"
  68718, //"django+unchained"
  27205, //"inception
  670, //"oldboy"
];

const Landing = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieList = await Promise.all(
        moviesId.map(async (id) => await getMovie(id))
      );
      setMovies(movieList);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Hero>
        <GradientContainer>
          <Title>Movies Search Engine</Title>
        </GradientContainer>
      </Hero>
      <MoviesGrid moviesList={movies} />
    </Container>
  );
};

export default Landing;
