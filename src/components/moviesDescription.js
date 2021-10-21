import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./movieDescription.css";

const MoviesDscription = () => {
  const [movies, setMovies] = useState([]);
  const params = useParams();

  const api = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    const moviesId = params.movieId;
    console.log(moviesId);
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/${moviesId}?api_key=${api}`
      )
      .then((res) => {
        console.log(res.data);
        const movie = res.data;
        setMovies(movie);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="mov">
      <h3>{movies.title}</h3>
      <div className="main">
        <div className="container img">
          <img
            src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
            alt={movies.title}
            className="mov_img"
          />
        </div>
        <div className="container bod">
          <p>
            <b> Popularity:</b> {movies.popularity}
          </p>
          <p>
            {" "}
            <b>Language:</b> {movies.original_language}
          </p>
          <p>
            <b> Description:</b> {movies.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviesDscription;
