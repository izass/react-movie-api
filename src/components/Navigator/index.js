import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "../NavBar";
import Landing from "../../pages/Landing";
import MovieDetails from "../../pages/MovieDetails";
import SearchResults from "../../pages/SearchResults";
import NotFound from "../NotFound";

const Navigator = () => {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/search/:param" component={SearchResults} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export { Navigator };
