import React, { Component } from 'react'
import './style.css'
 import { withRouter, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class NavBar extends Component {

    state = {
        movieSearch: "",
    }

    handleChange = event => {
        console.log(event.target.value);
        this.setState({ movieSearch: event.target.value });
    }    

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.movieSearch==="") {
            return
        }else {
            this.props.history.push(`/search/${this.state.movieSearch}`);
            document.location.reload(true);
        }
        
    }
    
    render() {
        return (
            <header className="main-nav">
                <div className="nav-container">
                    <div className="left-nav">
                        <li><Link to="/">Home</Link></li>                                    
                    </div>
                    <div className="center-nav">
                        <form style={{display:"inline", verticalAlign:"middle", position:"relative"}} onSubmit={this.handleSubmit}> 
                            <input
                                type="text"
                                placeholder="search"
                                value={this.state.movieSearch}
                                onChange={this.handleChange}
                            />
                            <button><FontAwesomeIcon icon={faSearch}/></button>  
                        </form>                    
                    </div>
                    <div className="right-nav">
                        <li><Link to="/">Filmes</Link></li>                         
                    </div>
                </div>            
            </header>
        );
    }   
}

export default withRouter(NavBar);
