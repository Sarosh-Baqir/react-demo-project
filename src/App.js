import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import MoviesDscription from './components/moviesDescription';
import Movies from './components/movies';
import MoviesReviews from './components/moviesReviews';
import FavouriteMovies from './components/favouriteMovies';

class App extends Component {
    

  render(){
    return (
      <div className="App">
        <Switch>
        <Route path='/' exact>
            <Movies />
          </Route>
          <Route path='/favourite-movies' exact>
            <FavouriteMovies />
          </Route>
  
           <Route exact path='/movies/:movieId' component={MoviesDscription}/>

           <Route exact path='/movies-reviews/:movieId' component={MoviesReviews}/>
           <Route path='/favourite-movies'>
             <FavouriteMovies />
           </Route>
  
  
        </Switch>  
  
      </div>
    );
  }
  
}

export default App;
