import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom'

import Landing from './pages/Landing'
import MovieDetails from './pages/MovieDetails'
import SearchResults from './pages/SearchResults';
import NavBar from './components/NavBar';

import './styles.css'


function App() {
  const history = useHistory()
  return (
    <Router>
      <Route path="/" component={NavBar}/>
      <Switch history={history}>
        <Route exact path="/" component={Landing}/>
        <Route path="/movies/:id" component={MovieDetails}/>
        <Route path="/search/:query" component={SearchResults}/>
      </Switch>
    </Router>
  );
}

export default App;
