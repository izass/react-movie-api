import React from "react";

import { Container, PosterImage } from "./styles";

const TMDB_IMAGE_HOST = "https://image.tmdb.org/t/p/w500";

const MoviesPoster = ({ movie }) => {
  const { id, poster_path: posterPath, title } = movie;

  const imageLink = `${TMDB_IMAGE_HOST}/${posterPath}`;

  return (
    <Container to={`/movies/${id}`}>
      <PosterImage src={imageLink} alt={title} />
    </Container>
  );
};

export default MoviesPoster;
