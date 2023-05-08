import React from "react";
import { Container, Image } from "./styles";

import { TMDB_IMAGE_HOST } from "../../../../constants/externalDataHosts";

const Poster = ({ path }) => {
  const imageLink = `${TMDB_IMAGE_HOST}/${path}`;

  return (
    <Container>
      <Image alt="poster" src={imageLink} />
    </Container>
  );
};

export { Poster };
