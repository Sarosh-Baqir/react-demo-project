import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

import './movies.css';
import MovieList from './MovieList';
import FilterArea from './FilterArea';
import Header from './header';

const Movies = () => {
  const [showMovies, setshowMovies] = useState([]);
  const [ filteredlanguage, setfilteredlanguage] = useState('Select Language..');
  useEffect(() => {
    axios.get(`
      https://api.themoviedb.org/3/movie/popular?api_key=ed4f70d18fa8cbc03fb59ce04847e1bc`)
      .then(res =>{
      const movies =res.data.results;
      setshowMovies(movies) 
      setfilteredlanguage(movies)  // setting state will rerender component
      }).catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);

  const showMoviesHandler = useCallback(filteredMovies => {
    setshowMovies(filteredMovies);
  }, []);

  const languageHandler = lang => {
    console.log(lang);
    console.log(filteredlanguage); 
    let filteredMovies = filteredlanguage.filter((mov) => {
      return mov.original_language === lang; 
  });
  if(lang === 'Select Language..'){
    filteredMovies = filteredlanguage;
  }
  console.log(filteredMovies);
  setshowMovies(filteredMovies);
  };

    return(
        <div>
            <Header data={showMovies} />
              <div align="center" className='filters'>
              <FilterArea
              onSelectingMovie={showMoviesHandler}
              onSelectingLang={languageHandler}
             />
            </div>
            <MovieList data={showMovies}/>
            
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