import React from "react";
import { Container } from "./styles";

const TMDB_IMAGE_HOST = "https://image.tmdb.org/t/p/w500";

const Poster = ({ path }) => {
  const imageLink = `${TMDB_IMAGE_HOST}/${path}`;

  return (
    <Container>
      <img
        alt="poster"
        src={imageLink}
      />
    </Container>
  );
};

export { Poster };
