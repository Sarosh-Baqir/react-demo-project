import { useSelector } from "react-redux";

import "./header.css";

const Header = () => {
  const allMov = useSelector((state) => state.allMovies);

  return (
    <div>
      <span className="header">
        Total Movies <span id="moviescount">{allMov.length}</span>
      </span>
    </div>
  );
};

export default Header;
