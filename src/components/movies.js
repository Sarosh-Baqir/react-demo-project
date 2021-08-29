import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

import './movies.css';
import MovieList from './MovieList';
import FilterArea from './FilterArea';
import Header from './header';
import FvrtMoviesContext from '../store/favouretes';

const Movies = () => {
  const [showMovies, setshowMovies] = useState([]);
  const [favourtMovies, setFavourtieMovies] = useState([]);
  //const [ filteredlanguage, setfilteredlanguage] = useState('Select Language..');
  //console.log(showMovies);

  useEffect(() => {
    axios.get(`
      https://api.themoviedb.org/3/movie/popular?api_key=ed4f70d18fa8cbc03fb59ce04847e1bc`)
      .then(res =>{
      const movies =res.data.results;
      setshowMovies(movies)  // setting state will rerender component
      }).catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);
  
  const showMoviesHandler = useCallback(filteredMovies => {
    setshowMovies(filteredMovies);
  }, []);

  // using useCallback to memoize function to boost performance
  const setFavouriteMoviesLocal = useCallback((movie) =>{
    setFavourtieMovies([...favourtMovies, movie])
}, [])


    return(
        <div>
            <Header data={showMovies} />
              <FvrtMoviesContext.Provider value={{setFavourtieMovies: setFavouriteMoviesLocal,
                 movies: favourtMovies }}>
              <div align="center" className='filters'>
              <FilterArea
              onSelectingMovie={showMoviesHandler}
             />
            </div>
            <MovieList data={showMovies}/>
              </FvrtMoviesContext.Provider>
            
        </div>
    );
}

export default Movies;

//onChangeFilter={filterChangeHandler}

/* const filterChangeHandler = (selectedLanguage) => {
      setfilteredlanguage(selectedLanguage);
      console.log(fil);
      let filteredMovies = showMovies.filter((mov) => {
        if(mov.original_language === filteredlanguage){
          console.log(mov.original_language);
        console.log(selectedLanguage);
        }
        return mov.original_language === filteredlanguage;
      });  
      
    if(filteredlanguage === 'Select Language..'){
      filteredMovies = showMovies;
   }
   console.log(filteredMovies);
      setshowMovies(filteredMovies);
    };*/