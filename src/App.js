import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import MoviesDscription from './components/moviesDescription';
import Movies from './components/movies';
import MoviesReviews from './components/moviesReviews';

function App() {
  var dummyData = [
    {
      "id": '1',
      "title": "Titanic",
      "image": "http://images.moviepostershop.com/titanic-movie-poster-1997-1020339699.jpg",
      "imdbID": 'tt0076759',
      "rating": 6.8,
      "language": "English"
    },
    {
      "id": '2',
      "title": "Taken",
      "image": "https://m.media-amazon.com/images/M/MV5BMTYxNzQ2MTUwMF5BMl5BanBnXkFtZTgwNTMwMDIzNDM@._V1_.jpg",
      "imdbID": "&#39;tt0080684&#39",
      "rating": 4.9,
      "language": "English"
    },
    {
      "id": '3',
      "title": "Hot Sweet Sour",
      "image": "https://m.media-amazon.com/images/M/MV5BNGY0OTBjZTgtZjAxMC00ODY3LTg5NTctMGY1MjBlOTI1MDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      "imdbID": "tt0086190&#39",
      "rating": 5.7,
      "language": "Turkish"
    },
    {
      "id": '4',
      "title": "The Time That Remains",
      "image": "https://m.media-amazon.com/images/M/MV5BMTUwNDg4MDQzOF5BMl5BanBnXkFtZTcwNDU5MTkyNA@@._V1_.jpg",
      "imdbID": "tt0086190&#39",
      "rating": 5.7,
      "language": "Arabic"
    },
    {
      "id": '5',
      "title": "The Villainess",
      "image": "https://i.ytimg.com/vi/m82iyRmr1XE/movieposter.jpg",
      "imdbID": "tt0086190&#39",
      "rating": 5.7,
      "language": "Korean"
    }
  ];
  

    const [ movies, setmovies ] = useState(dummyData);


  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Movies movies={movies}/>
        </Route>

         <Route path='/movies/:movieId'>
           <MoviesDscription />
         </Route>

         <Route path='/movies-reviews/:movieId'>
           <MoviesReviews />
         </Route>

      </Switch>  

    </div>
  );
}

export default App;
