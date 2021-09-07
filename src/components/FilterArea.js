
import Search from './search';
import { Link } from 'react-router-dom';

const FilterArea = (props) => {

   const dropdownChangeHandler = (event) => {
    props.onSelectingLang(event.target.value);
  };
    return(
      <div >
          <form className="search">
        <Search onSelectingMovie={props.onSelectingMovie} />
      </form>
          Genre: <select ><option>All</option></select><br /> <br />
          Release Date: <select ><option>All</option></select>&emsp;
          Rating: <select ><option>All</option></select>&emsp;
          Sort By: <select ><option>Popularity</option></select>&emsp;
          <Link to={`/favourite-movies`}><button>Favourites</button></Link>
          <select onChange={dropdownChangeHandler}>
              <option value="Select Language..">Select Language..</option>
              <option value="en">English</option>
              <option value="Turkish">Turkish</option>
              <option value="Arabic">Arabic</option>
              <option value="Korean">Korean</option>
          </select>

      </div>
  );

  }



export default FilterArea;
