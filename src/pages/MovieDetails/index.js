import React, { Component } from "react";
import { getMovieDetails } from "../../services/api";
import YouTube from "react-youtube";

import {
  Container,
  PosterSection,
  InfoSection,
  TrailerSection,
} from "./styles.js";

// function MovieDetails(props) {

//   return (
//     <Container>
//       <div>
//         <PosterSection>
//           <div className="poster">
//             <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
//           </div>
//         </PosterSection>
//         <InfoSection>
//           <h1>{movie.title}</h1>
//           <h3>
//             {year} Dirigido por {director}
//           </h3>
//           <p>{movie.overview}</p>
//           <h3>Elenco</h3>
//           <p>{cast}</p>
//           <h3>Genero</h3>
//           <p>{genre}</p>
//           <p>{movie.runtime} min</p>
//           <h3>Mais informações</h3>
//           <a
//             href={"https://www.imdb.com/title/" + movie.imdb_id}
//             target="_blank"
//           >
//             https://www.imdb.com/title/{movie.imdb_id}
//           </a>
//         </InfoSection>
//       </div>
//       <TrailerSection>
//         <h2>Trailer</h2>
//         <hr></hr>
//         <div>
//           <YouTube videoId={trailer} onReady={this._onReady} />
//         </div>
//       </TrailerSection>
//     </Container>
//   );
// }
export default class Movie extends Component {
  state = {
    movie: {},
    year: "",
    director: "",
    genre: "",
    cast: "",
    trailer: "",
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await getMovieDetails(id);
    this.setState({ movie: response });
    this.setState({ year: response.release_date.substring(0, 4) });
    this.catchDirector(response.credits.crew);
    this.catchCast(response.credits.cast);
    this.catchGenres(response.genres);
    this.setState({ trailer: response.videos.results[0].key });
  }

  catchDirector = (iten) => {
    var d = "";
    iten.forEach((people) => {
      if (people.department === "Directing" && people.job === "Director") {
        if (d === "") d = people.name;
        else d = d + ", " + people.name;
      } else {
        return;
      }
    });
    this.setState({ director: d });
  };

  catchCast = (iten) => {
    var c = "";
    for (var i = 0; i < 5; i++) {
      if (c === "") c = iten[i].name;
      else c = c + ", " + iten[i].name;
    }
    this.setState({ cast: c });
  };

  catchGenres = (iten) => {
    var g = "";
    iten.forEach((target) => {
      if (g === "") g = target.name;
      else g = g + ", " + target.name;
    });
    this.setState({ genre: g });
  };

  render() {
    const { movie, year, director, cast, genre, trailer } = this.state;

    return (
      <Container>
        <div>
          <PosterSection>
            <div className="poster">
              <img
                src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
              />
            </div>
          </PosterSection>
          <InfoSection>
            <h1>{movie.title}</h1>
            <h3>
              {year} Dirigido por {director}
            </h3>
            <p>{movie.overview}</p>
            <h3>Elenco</h3>
            <p>{cast}</p>
            <h3>Genero</h3>
            <p>{genre}</p>
            <p>{movie.runtime} min</p>
            <h3>Mais informações</h3>
            <a
              href={"https://www.imdb.com/title/" + movie.imdb_id}
              target="_blank"
            >
              https://www.imdb.com/title/{movie.imdb_id}
            </a>
          </InfoSection>
        </div>
        <TrailerSection>
          <h2>Trailer</h2>
          <hr></hr>
          <div>
            <YouTube videoId={trailer} onReady={this._onReady} />
          </div>
        </TrailerSection>
      </Container>
    );
  }
}
