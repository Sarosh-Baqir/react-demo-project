import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

import Search from "./search";
import { Link } from "react-router-dom";

const FilterArea = () => {
  const [filteredlanguage, setfilteredlanguage] = useState("Select Language..");
  const dispatch = useDispatch();

  const api = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    axios
      .get(
        `
      https://api.themoviedb.org/3/movie/popular?api_key=${api}`
      )
      .then((res) => {
        const movies = res.data.results;
        setfilteredlanguage(movies);
        dispatch({ type: "removeAllMov" });
        movies.map((movie) => dispatch({ type: "addAllMov", amov: movie }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const languageHandler = (lang) => {
    let filteredMovies = filteredlanguage.filter((mov) => {
      return mov.original_language === lang;
    });
    if (lang === "Select Language..") {
      filteredMovies = filteredlanguage;
    }
    console.log(filteredMovies);
    dispatch({ type: "removeAllMov" });
    filteredMovies.map((movie) => dispatch({ type: "addAllMov", amov: movie }));
  };

  const dropdownChangeHandler = (event) => {
    languageHandler(event.target.value);
  };

  return (
    <div>
      <form className="search">
        <Search />
      </form>
      Genre:{" "}
      <select>
        <option>All</option>
      </select>
      <br /> <br />
      Release Date:{" "}
      <select>
        <option>All</option>
      </select>
      &emsp; Rating:{" "}
      <select>
        <option>All</option>
      </select>
      &emsp; Sort By:{" "}
      <select>
        <option>Popularity</option>
      </select>
      &emsp;
      <Link to={`/favourite-movies`}>
        <button>Favourites</button>
      </Link>
      <select onChange={dropdownChangeHandler}>
        <option value="Select Language..">Select Language..</option>
        <option value="en">English</option>
        <option value="Turkish">Turkish</option>
        <option value="Arabic">Arabic</option>
        <option value="Korean">Korean</option>
      </select>
    </div>
  );
};

export default FilterArea;
