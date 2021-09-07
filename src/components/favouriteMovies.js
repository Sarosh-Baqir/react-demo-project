import { useSelector } from "react-redux";
import ShowFvrtMov from "./showFvrtMov";

const FavouriteMovies = () => {
   const fvrtMov = useSelector(state => state.favourtMovies);
   console.log(fvrtMov);
    return (
       <div>
          <ShowFvrtMov data={fvrtMov}/>
      </div>
     );
  }

  export default FavouriteMovies;
  