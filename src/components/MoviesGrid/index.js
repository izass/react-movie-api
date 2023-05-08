import React from "react";

import MoviesPoster from "../MoviePoster";
import { Container } from "./styles";

const MoviesGrid = ({ moviesList }) => {
  return (
    <Container>
      {moviesList.map((movie) => (
        <MoviesPoster key={movie.id} movie={movie} />
      ))}
    </Container>
  );
};

export default MoviesGrid;
