import React,{ useState } from 'react';

const FvrtMoviesContext = React.createContext({});
//   export const FvrtMoviesContextProvider = (props) => {
//     const [favourtMovies, setFavourtieMovies] = useState([])
  
//     // using useCallback to memoize function to boost performance
//   const setFavouriteMoviesLocal = React.useCallback((movie) =>{
//     setFavourtieMovies([...favourtMovies, movie])
// }, []);

//   return (
//     <FvrtMoviesContext.Provider
//     value = {{setFavourtieMovies: setFavouriteMoviesLocal,
//              movies: favourtMovies }}
//     >
//       {props.children}
//     </FvrtMoviesContext.Provider>
//   );
   // }
  export default FvrtMoviesContext;