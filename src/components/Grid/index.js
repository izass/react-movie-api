import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import './style.css'

export default class Grid extends Component {
    render() {
        return (
            <div style={{flexWrap:"wrap", display:"flex"}}>
            {this.props.list.map(movie => (
                <div className="square">
                    <Link 
                        className="poster"
                        to={`/movies/${movie.id}`}
                        style={{textDecoration:"none"}}
                    >
                        <img src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt="poster"/>
                        <h2 key={movie.id}>{movie.title}</h2>
                    </Link>                            
                </div>
            ))}                 
            </div>
        );
    }
}