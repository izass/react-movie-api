import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const API_KEY = "API_KEY;";

async function searchMovies(query) {
  try {
    const response = await api.get(
      `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    return error;
  }
}

async function getMovie(id) {
  try {
    const response = await api.get(`movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

async function getMovieDetails(id) {
  try {
    const response = await api.get(
      `movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export { searchMovies, getMovie, getMovieDetails };
