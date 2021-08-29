import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const inputRef = useRef();
    const { onSelectingMovie } = props;

    
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchValue === inputRef.current.value){
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ed4f70d18fa8cbc03fb59ce04847e1bc&query=${searchValue}`)
      .then(res =>{
         console.log(res.data.results);
         onSelectingMovie(res.data.results);
       }).catch(function (error) {
           // handle error
           console.log(error);
       })
      }
    }, 500)
    return () => {
      clearTimeout(timer);
    };
  }, [searchValue, onSelectingMovie]);

  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }
  return(
      <div>
        <input
          ref={inputRef}
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
      </div>
  );
}

export default Search;