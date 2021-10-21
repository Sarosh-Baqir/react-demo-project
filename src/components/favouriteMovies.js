import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./MovieList.css";

const FavouriteMovies = () => {
  const fvrtMov = useSelector((state) => state.favourtMovies);

  return fvrtMov.map((movie) => {
    return (
      <ul className=".movielist" key={movie.id}>
        <li className="movie">
          <div className="movie-header">
            <h2>{movie.title}</h2>
          </div>
          <div>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="img"
              />
            </Link>
            <p>Popularity: {movie.popularity}</p>
            <br />
            <Link to={`/movies-reviews/${movie.id}`}>
              <h4>Reviews</h4>
            </Link>
          </div>
        </li>
      </ul>
    );
  });
};

export default FavouriteMovies;
