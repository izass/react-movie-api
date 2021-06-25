import axios from 'axios'

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
 });

 async function searchMovies(querry) {
  try {
    const response = await api.get(`search/movie?api_key=344db5c6830b31f30c9a1b6ba00bde07&language=en-US&page=1&include_adult=false&query=${querry}`)
    return response.data.results
  } catch (error) {
    return error
  }
 }

 async function getMovie(id) {
  try {
    const response = await api.get(`movie/${id}?api_key=344db5c6830b31f30c9a1b6ba00bde07`)
    return response.data
  } catch (error) {
    return error
  }
 }

 async function getMovieDetails(id) {
  try {
    const response = await api.get(`movie/${id}?api_key=344db5c6830b31f30c9a1b6ba00bde07&append_to_response=videos,credits`)
    return response.data
  } catch (error) {
    return error
  }
 }

 export {
   searchMovies,
   getMovie,
   getMovieDetails
 };

