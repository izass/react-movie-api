import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const API_KEY = "API_KEY;";

const searchMovies = async ({ param, page }) => {
  const pageNumber = page || 1;

  try {
    const response = await api.get(
      `search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${param}&page=${pageNumber}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

const getMovie = async (id) => {
  try {
    const response = await api.get(`movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

const getMovieDetails = async (id) => {
  try {
    const response = await api.get(
      `movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export { searchMovies, getMovie, getMovieDetails };
