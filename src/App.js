import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import Landing from "./pages/Landing";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./pages/SearchResults";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

import GlobalStyle from "./globalStyles";

function App() {
  const history = useHistory();

  return (
    <Router>
      <GlobalStyle />
      <Route path="/" component={NavBar} />
      <Switch history={history}>
        <Route exact path="/" component={Landing} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/search/:param" component={SearchResults} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
