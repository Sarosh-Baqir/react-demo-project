import { useContext } from "react";

import FvrtMoviesContext from '../store/favouretes';
import MovieList from './MovieList';

const FavouriteMovies = (props) => {
   const ctx = useContext(FvrtMoviesContext);
    return (
       <div>
          <MovieList data={ctx.movies}/>
      </div>
     );
  }

  export default FavouriteMovies;
  