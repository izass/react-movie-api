import React, { useEffect, useState } from "react";

import { MoviesGrid } from "../../components/MoviesGrid";
import { getMovie } from "../../services/api";
import { MOVIES_ID } from "../../constants/movies-id";

import {
  Container,
  Hero,
  Title,
  GradientContainer,
  MoviesList,
} from "./styles.js";

const Landing = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieList = await Promise.all(MOVIES_ID.map((id) => getMovie(id)));
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
      <MoviesList>
        <MoviesGrid moviesList={movies} />
      </MoviesList>
    </Container>
  );
};

export { Landing };
