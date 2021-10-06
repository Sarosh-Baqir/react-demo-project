import { useParams } from "react-router";

import './movieDescription.css';
import fakeData from "../mobilesData";

const MoviesDscription = () => {

    let params = useParams();

    const movie = fakeData.find(mov => mov.id === params.movieId)


    return(
        <div className="mov">
            <h3>{movie.title}</h3>
            <div className='container'>
            <img src={movie.image} alt={movie.title} className='mov_img'/><br /><br /><br />
            </div>
            <div className='container'>
                <div className='mov_body'>
            <p><b> Rating:</b> {movie.rating}</p>
            <p> <b>Language:</b> {movie.language}</p>
            </div>
            </div>
        </div>
    );
}

export default MoviesDscription;