import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();

  const api = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchValue === inputRef.current.value) {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${searchValue}`
          )
          .then((res) => {
            console.log(res.data.results);
            dispatch({ type: "removeAllMov" });
            res.data.results.map((movie) =>
              dispatch({ type: "addAllMov", amov: movie })
            );
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
    </div>
  );
};

export default Search;
