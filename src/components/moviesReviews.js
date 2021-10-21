import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./movieReviews.css";

const MoviesReviews = () => {
  const [movies, setMovie] = useState([]);
  const params = useParams();

  const api = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    const moviesId = params.movieId;
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=${api}`
      )
      .then((res) => {
        const movie = res.data.results;
        setMovie(movie);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return movies.map((movie) => {
    return (
      <div className="container" key={movie.id}>
        <h4>{movie.author}:</h4>
        <p>{movie.content}</p>
      </div>
    );
  });
};

export default MoviesReviews;
