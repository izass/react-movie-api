import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import { LoadingPage } from "../../components/LoadingPage";
import { TrailerSection } from "./compose/TrailerSection";
import { Poster } from "./compose/Poster";

import { Container, MovieData } from "./styles.js";
import { InfoSection } from "./compose/InfoSection";
import { useMovieDetails } from "../../hooks/useMovieDetails";

const MovieDetails = () => {
  const { id } = useParams();
  const { isLoading, hasError, movie } = useMovieDetails(id);

  const {
    title,
    runtime,
    overview,
    imdbId,
    posterPath,
    releasedYear,
    genre,
    cast,
    direction,
    videoId,
  } = movie;

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Container>
      <MovieData>
        <Poster path={posterPath} />
        <InfoSection
          title={title}
          releasedYear={releasedYear}
          overview={overview}
          cast={cast}
          genres={genre}
          runtime={runtime}
          direction={direction}
          imdbId={imdbId}
        />
      </MovieData>
      <TrailerSection id={videoId} />
    </Container>
  );
};

export default MovieDetails;
