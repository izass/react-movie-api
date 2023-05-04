import { useEffect, useMemo, useState } from "react";
import { getMovieDetails } from "../services/api";

const useMovieDetails = (id) => {
  const [movieData, setMovieData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieDetails(id);
        setMovieData(response);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const {
    title,
    runtime,
    overview,
    imdb_id,
    poster_path,
    release_date,
    genres,
    credits,
    videos
  } = movieData;

  const movie = useMemo(() => {
    const releasedYear = release_date?.split("-")[0];
    const genre = genres
      ?.map((genre) => {
        return genre.name;
      })
      .join(", ");

    const cast = credits?.cast
      .slice(0, 5)
      .map((item) => {
        return item.name;
      })
      .join(", ");

    const direction = credits?.crew
      .filter(
        (item) => item.department === "Directing" && item.job === "Director"
      )
      .map((director) => {
        return director.name;
      })
      .join(", ");

    const videoId = videos?.results.find(
      (video) => video?.type === "Trailer"
    )?.key;

    return {
      title,
      runtime,
      overview,
      imdbId: imdb_id,
      posterPath: poster_path,
      releasedYear,
      genre,
      cast,
      direction,
      videoId
    };
  }, [
    release_date,
    credits,
    genres,
    imdb_id,
    poster_path,
    runtime,
    title,
    overview,
    videos
  ]);

  return {
    isLoading,
    hasError,
    movie,
  };
};

export { useMovieDetails };
