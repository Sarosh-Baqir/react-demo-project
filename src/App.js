import { useState } from 'react';

import './App.css';
import MovieList from './components/MovieList';

function App() {
  var dummyData = [
    {
      "id": 1,
      "title": "Titanic",
      "image": "http://images.moviepostershop.com/titanic-movie-poster-1997-1020339699.jpg",
      "imdbID": 'tt0076759',
      "rating": 6.8
    },
    {
      "id": 2,
      "title": "Taken",
      "image": "https://m.media-amazon.com/images/M/MV5BMTYxNzQ2MTUwMF5BMl5BanBnXkFtZTgwNTMwMDIzNDM@._V1_.jpg",
      "imdbID": "&#39;tt0080684&#39",
      "rating": 4.9
    },
    {
      "id": 3,
      "title": "Love Actually",
      "image": "http://vignette3.wikia.nocookie.net/glee/images/9/9e/Love-actually-poster.jpg/revision/latest?cb=20121110180622",
      "imdbID": "tt0086190&#39",
      "rating": 5.7
    }
  ];
  

    const [ movies, setmovies ] = useState(dummyData);

  return (
    <div className="App">
      <h1 className='header'>Movie List</h1>
      <ul className='movielist'>
      {movies.map((movie) => (
        <MovieList
          key={movie.id}
          title={movie.title}
          image={movie.image}
          rating={movie.rating}
        />
      ))}
    </ul>
    </div>
  );
}

export default App;
