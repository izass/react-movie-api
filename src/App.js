import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom'

import Landing from './pages/landing'
import Movie from './pages/movie'
import Search from './pages/search';
import NavBar from './components/NavBar';

import './styles.css'


function App() {
  const history = useHistory()
  return (
    <Router>
      <Route path="/" component={NavBar}/>
      <Switch history={history}>
        <Route exact path="/" component={Landing}/>
        <Route path="/movies/:id" component={Movie}/>
        <Route path="/search/:query" component={Search}/>
      </Switch>
    </Router>
  );
}

export default App;
