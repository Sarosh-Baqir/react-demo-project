import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import './MovieList.css';

const MovieList = (props) => {
  const dispatch = useDispatch();

  // const fvrtmovHandler = (movie) => {
  //   dispatch({ type: 'addFvrtMov', fmov: movie });
  // };
 
    return(
      props.data.map((movie) => {
        return(
          <ul className=".movielist"key={movie.id}>
          <li className='movie'>
            <div className="movie-header"> 
              <h2>{movie.title}</h2>
            </div>  
            <div>
             <Link to={`/movies/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="img"/></Link>
              <p>Popularity: {movie.popularity}</p><br />
              <Link to={`/movies-reviews/${movie.id}`}><h4>Reviews</h4></Link>
              <button onClick={ () => dispatch({ type: 'addFvrtMov', fmov: movie }) }>Add to Favourites</button>
            </div>
          </li>
          </ul>
        )
      })
    );
}

export default MovieList;


