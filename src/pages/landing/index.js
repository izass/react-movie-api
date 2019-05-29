import React, { Component } from 'react'
import api from '../../services/api'
import './style.css'
import Grid from '../../components/Grid'

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
            const response = await api.get(`${this.state.movieMap[i]}?api_key=API_KEY;`);  
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
                <Grid list={data}/>                    
            </div>
        );
    }
}