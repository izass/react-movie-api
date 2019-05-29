import React, { Component } from 'react'
import api from '../../services/api'
import './style.css'
import { Link } from 'react-router-dom'

export default class Landing extends Component {
    
    state = {
        movieMap: [
            105,//"back+to+the+future            
            82695,//"les+misérables"
            299536,//"avengers+infinity+war"
            68718,//"django+unchained"
            27205,//"inception
            670,//"oldboy"
        ],
        data: []
    }

    getData = async () => {
        var movieList = [];
        for(var i=0; i<this.state.movieMap.length; i++) {
            const response = await api.get(`${this.state.movieMap[i]}?api_key=344db5c6830b31f30c9a1b6ba00bde07`);  
            movieList.push(response.data);            
        }        
        this.setState({data:movieList});        
    }

    componentDidMount() {
        this.getData();          
    }
    
    render() {

        const { data } = this.state;

        return (
            <div className="landing-container">
                <header>
                    <h1>Landing Page</h1>                    
                </header>
                <div>
                    {data.map(movie => (
                        <div className="square">
                            <Link 
                                className="poster"
                                to={`/movies/${movie.id}`}
                                style={{textDecoration:"none"}}
                            >
                                <img src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path}/>
                                <h2 key={movie.id}>{movie.title}</h2>
                            </Link>                            
                        </div>
                    ))}                                                              
                </div>                 
            </div>
        );
    }
}