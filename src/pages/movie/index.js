import React, { Component } from 'react'
import api from '../../services/api'
import './style.css'
import YouTube from 'react-youtube'

export default class Movie extends Component {

    state = {
        movie: {},
        year: "",
        director: "",
        genre: "",
        cast: "",
        trailer:"",
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`${id}?api_key=API_KEY;&append_to_response=videos,credits`);
        this.setState({movie: response.data});
        this.setState({year: response.data.release_date.substring(0,4)});
        this.catchDirector(response.data.credits.crew);
        this.catchCast(response.data.credits.cast);
        this.catchGenres(response.data.genres);
        this.setState({trailer:response.data.videos.results[0].key})
    }

    catchDirector = (iten) => {
        var d ="";
        iten.forEach(people => {
            if(people.department ==="Directing" && people.job==="Director"){                
                if(d === "")
                    d = people.name;                
                else
                    d = d+", "+people.name;
            }
            else {                
                return 
            }                
        });
        this.setState({director: d});
    }

    catchCast = (iten) => {        
        var c ="";
        for (var i=0; i<5; i++) {
            if(c === "")
                    c = iten[i].name;                
                else
                    c = c+", "+iten[i].name;
        }
        this.setState({cast: c});
    }    

    catchGenres = (iten) => {
        var g="";
        iten.forEach(target =>{            
            if(g === "")
                    g = target.name;                
                else
                    g = g+", "+target.name;
        });
        this.setState({genre: g});
    }

    render() {

        const { movie, year, director, cast, genre, trailer } = this.state;
        //this.catchYear();

        return (
            <div className="movie-content">
                <div> 
                    <div className="square-poster">
                        <div className="poster">
                            <img src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path}/>
                        </div>
                    </div>
                    <div className="square-info">         
                        <h1>{movie.title}</h1>  
                        <h3>{year} Dirigido por {director}</h3>   
                        <p>{movie.overview}</p> 
                        <h3>Elenco</h3>
                        <p>{cast}</p>
                        <h3>Genero</h3>
                        <p>{genre}</p>
                        <p>{movie.runtime} min</p>
                        <h3>Mais informações</h3>         
                        <a href={"https://www.imdb.com/title/"+movie.imdb_id} target="_blank">
                        https://www.imdb.com/title/{movie.imdb_id}
                        </a>                
                    </div>
                </div>
                <div className="trailer">                    
                    <h2>Trailer</h2>
                    <hr></hr>
                    <div>
                        <YouTube                            
                            videoId={trailer}                        
                            onReady={this._onReady}
                        />
                    </div>                
                </div>     
            </div>            
        );
    }
}