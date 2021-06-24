import React, { Component } from 'react'
import apiQuery from '../../services/apiQuery';
import './style.css'
import Grid from '../../components/Grid'

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
                <Grid list={movieList}/>                
            </div>
        );
    }
}