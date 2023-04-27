import React from "react";

import { Container } from "./styles";

const MoviesPoster = ({ movie }) => {
  const { id, poster_path: posterPath } = movie;

  return (
    <Container to={`/movies/${id}`}>
      <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt="poster" />
    </Container>
  );
};

export default MoviesPoster;
