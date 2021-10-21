import "./movies.css";
import MovieList from "./MovieList";
import FilterArea from "./FilterArea";
import Header from "./header";

const Movies = () => {
  return (
    <div>
      <Header />
      <div align="center" className="filters">
        <FilterArea />
      </div>
      <MovieList />
    </div>
  );
};

export default Movies;
