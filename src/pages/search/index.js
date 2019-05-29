import React, { Component } from 'react'
import apiQuery from '../../services/apiQuery';
import { Link } from 'react-router-dom'
import './style.css'

export default class Search extends Component {
    
    state = {
        movieList: [],
    }

    async componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const { query } = this.props.match.params;
        const response = await apiQuery.get(query);
        console.log(response.data);
        this.setState({movieList:response.data.results});
    }

    render() { 
        
        const { movieList } = this.state;
        //this.getData();

        return (
            <div class="search-container">
                <div style={{flexWrap:"wrap", display:"flex"}}>
                {movieList.map(movie => (
                        <div className="s">
                            <Link 
                                className="p"
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