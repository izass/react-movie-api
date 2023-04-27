import React, { useEffect, useState } from "react";

import { getMovieDetails } from "../../services/api";
import LoadingPage from "../../components/LoadingPage";

import {
  Container,
  PosterSection,
  InfoSection,
  TrailerSection,
  MovieData,
  TrailerContainer,
} from "./styles.js";

const MovieDetails = (props) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { id } = props.match.params;
      try {
        const response = await getMovieDetails(id);
        setMovie(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [props.match.params]);

  if (loading) {
    return <LoadingPage />;
  }
  const { title, runtime, overview, imdb_id: imdbId } = movie;
  const releasedYear = movie.release_date.substring(0, 4);
  const genres = movie.genres
    .map((genre) => {
      return genre.name;
    })
    .join(", ");

  const cast = movie.credits.cast
    .slice(0, 5)
    .map((item) => {
      return item.name;
    })
    .join(", ");

  const getDirection = () => {
    const direction = movie.credits.crew.filter(
      (item) => item.department === "Directing" && item.job === "Director"
    );

    return direction
      .map((director) => {
        return director.name;
      })
      .join(", ");
  };

  const videoId = movie.videos.results.find(
    (video) => video.type === "Trailer"
  ).key;

  return (
    <Container>
      <MovieData>
        <PosterSection>
          <img
            alt="poster"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </PosterSection>
        <InfoSection>
          <h1>{title}</h1>
          <h3>
            {releasedYear} Dirigido por {getDirection()}
          </h3>
          <p>{overview}</p>
          <h3>Elenco</h3>
          <p>{cast}.</p>
          <h3>Genero</h3>
          <p>{genres}</p>
          <p>{runtime} min</p>
          <h3>Mais informações</h3>
          <a
            href={`https://www.imdb.com/title/${imdbId}`}
            target="_blank"
            rel="noreferrer"
          >
            https://www.imdb.com/title/{imdbId}
          </a>
        </InfoSection>
      </MovieData>
      <TrailerSection>
        <h2>Trailer</h2>
        <hr></hr>
        <TrailerContainer>
          <iframe
            width="100%"
            height="360"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </TrailerContainer>
      </TrailerSection>
    </Container>
  );
};

export default MovieDetails;
