import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
  },
});

const searchMovies = async ({ search, page }) => {
  const pageNumber = page || 1;

  const params = {
    query: search,
    page: pageNumber,
  };

  try {
    const response = await api.get("search/movie", {
      params,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const getMovie = async (id) => {
  try {
    const response = await api.get(`movie/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

const getMovieDetails = async (id) => {
  const params = {
    append_to_response: "videos,credits",
  };

  try {
    const response = await api.get(`movie/${id}`, { params });
    return response.data;
  } catch (error) {
    return error;
  }
};

export { searchMovies, getMovie, getMovieDetails };
