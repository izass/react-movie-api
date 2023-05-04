import React from "react";
import { Container } from "./styles";

const IMDB_PATH = "https://www.imdb.com/title";

const InfoSection = ({
  title,
  releasedYear,
  overview,
  cast,
  genres,
  runtime,
  direction,
  imdbId
}) => {
  const imdbSrc = `${IMDB_PATH}/${imdbId}`

  return (
    <Container>
      <h1>{title}</h1>
      <h3>
        {releasedYear} Dirigido por {direction}
      </h3>
      <p>{overview}</p>
      <h3>Elenco</h3>
      <p>{cast}.</p>
      <h3>Genero</h3>
      <p>{genres}</p>
      <p>{runtime} min</p>
      <h3>Mais informações</h3>
      <a
        href={imdbSrc}
        target="_blank"
        rel="noreferrer"
      >
        {imdbSrc}
      </a>
    </Container>
  );
};

export { InfoSection };
