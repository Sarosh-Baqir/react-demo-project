import { useState } from 'react';


import './movies.css';
import MovieList from './MovieList';
import FilterArea from './FilterArea';
import Header from './header';

const Movies = (props) => {



    const [ filteredlanguage, setfilteredlanguage] = useState('Select Language..');

    const filterChangeHandler = (selectedLanguage) => {
      setfilteredlanguage(selectedLanguage);
    };
    let filteredMovies = props.movies.filter((mov) => {
      return mov.original_language === filteredlanguage;
    });  
    if(filteredlanguage === 'Select Language..'){
       filteredMovies = props.movies;
    }

    return(
        <div>
            <Header data={props.movies} />
            <div align="center" className='filters'>
             <FilterArea
              selected={filteredlanguage}
              onChangeFilter={filterChangeHandler}
             />
            </div>

            <MovieList data={filteredMovies}/>
            
        </div>
    );
}

export default Movies;