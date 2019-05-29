import axios from 'axios'

const apiQuery = axios.create({ 
    baseURL: "https://api.themoviedb.org/3/search/movie?api_key=API_KEY;&language=en-US&page=1&include_adult=false&query="
 });

 export default apiQuery;