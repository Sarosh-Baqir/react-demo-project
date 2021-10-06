import { useParams } from "react-router-dom";

import "./movieReviews.css";
import fakeData from "../mobilesData";

const MoviesReviews = () => {
  let params = useParams();
  const movie = fakeData.find((mov) => mov.id === params.movieId);

  return (
    <div className="mov">
      <h3>{movie.title}</h3>
      <div className="container">
        <img src={movie.image} alt={movie.title} className="mov_img" />
        <br />
        <br />
        <br />
      </div>
      <div className="container">
        <div className="mov_body">
          {movie.reviews.map((mv) => (
            <p>
              <b>{mv.name} :</b> {mv.review}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesReviews;
