import React, { useEffect, useState } from "react";
import { getMovieDetails } from "../../services/api";
import YouTube from "react-youtube";

import {
  Container,
  PosterSection,
  InfoSection,
  TrailerSection,
} from "./styles.js";

function MovieDetails(props) {
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const { id } = props.match.params
      const response = await getMovieDetails(id)
      setMovie(response)
    }

    fetchData()
  }, [props.match.params])

  function getReleaseYear() {
    return movie.release_date.substring(0, 4)
  }

  function getGenres() {
    return movie.genres.map(genre => { return genre.name }).join(", ")
  }

  function getCast() {
    const cast = movie.credits.cast.slice(0, 5)
    return cast.map(iten => { return iten.name }).join(", ")
  }

  function getDirection() {
    const direction = movie.credits.crew.filter(iten =>
      iten.department === "Directing" && iten.job === "Director"
    )

    return direction.map(director => { return director.name }).join(", ")
  }

  if (!movie) {
    return <h1>loading...</h1>
  }

  return (
    <Container>
      <div>
        <PosterSection>
          <img
            alt="poster"
            src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          />
        </PosterSection>
        <InfoSection>
          <h1>{movie.title}</h1>
          <h3>
            {getReleaseYear()} Dirigido por {getDirection()}
          </h3>
          <p>{movie.overview}</p>
          <h3>Elenco</h3>
          <p>{getCast()}</p>
          <h3>Genero</h3>
          <p>{getGenres()}</p>
          <p>{movie.runtime} min</p>
          <h3>Mais informações</h3>
          <a
            href={"https://www.imdb.com/title/" + movie.imdb_id}
            target="_blank"
            rel="noreferrer"
          >
            https://www.imdb.com/title/{movie.imdb_id}
          </a>
        </InfoSection>
      </div>
      <TrailerSection>
        <h2>Trailer</h2>
        <hr></hr>
        <div>
          <YouTube videoId={movie.videos.results[0].key} />
        </div>
      </TrailerSection>
    </Container>
  );
}

export default MovieDetails
