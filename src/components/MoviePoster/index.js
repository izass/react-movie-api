import React from "react";

import { TMDB_IMAGE_HOST } from "../../constants/external-data-hosts";
import { Container, PosterImage } from "./styles";

const MoviesPoster = ({ movie }) => {
  const { id, poster_path: posterPath, title } = movie;

  const imageLink = `${TMDB_IMAGE_HOST}/${posterPath}`;

  return (
    <Container to={`/movies/${id}`}>
      <PosterImage src={imageLink} alt={title} />
    </Container>
  );
};

export { MoviesPoster };
