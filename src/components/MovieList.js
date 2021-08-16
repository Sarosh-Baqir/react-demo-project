import { Link } from 'react-router-dom';
import { Component } from 'react';

import './MovieList.css';

class MovieList extends Component {
  render(){
    
    return(
      this.props.data.map((movie) => {
        return(
          <ul className=".movielist"key={movie.id}>
          <li className='movie'>
            <div className="movie-header"> 
              <h2>{movie.title}</h2>
            </div>  
            <div>
             <Link to={`/movies/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></Link>
              <p>Popularity: {movie.popularity}</p><br />
              <Link to={`/movies-reviews/${movie.id}`}><h4>Reviews</h4></Link>
            </div>
          </li>
          </ul>
        )
      })
    );
  }
}

export default MovieList;


