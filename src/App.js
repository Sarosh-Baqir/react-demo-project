import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import MoviesDscription from "./components/moviesDescription";
import Movies from "./components/movies";
import MoviesReviews from "./components/moviesReviews";
import fakeData from "./mobilesData";

function App() {
  const [movies, setmovies] = useState(fakeData);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Movies movies={movies} />
        </Route>
        <Route exact path="/movies/:movieId" component={MoviesDscription} />

        <Route
          exact
          path="/movies-reviews/:movieId"
          component={MoviesReviews}
        />
      </Switch>
    </div>
  );
}

export default App;
