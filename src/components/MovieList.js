import './MovieList.css';

const MovieList = (props) => {

    return(
          <li className='movie'>
            <div className="movie-header"> 
              <h2>{props.title}</h2>
            </div>  
            <div>
              <img src={props.image} />
              <p>&#9734;{props.rating}</p>
            </div>
          </li>
    );
}

export default MovieList;