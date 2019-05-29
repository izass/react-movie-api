import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './pages/landing'
import Movie from './pages/movie'
import Search from './pages/search';
import NavBar from './components/NavBar';

const Routes = () => (
    <BrowserRouter>
        <Route path="/" component={NavBar}/>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/movies/:id" component={Movie}/>   
            <Route path="/search/:query" component={Search}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;