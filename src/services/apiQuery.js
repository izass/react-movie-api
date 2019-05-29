import axios from 'axios'

const apiQuery = axios.create({ 
    baseURL: "https://api.themoviedb.org/3/search/movie?api_key=344db5c6830b31f30c9a1b6ba00bde07&language=en-US&page=1&include_adult=false&query="
 });

 export default apiQuery;