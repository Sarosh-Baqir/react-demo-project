import { Component } from 'react';


class FilterArea extends Component{


   dropdownChangeHandler = (event) => {
    this.props.onChangeFilter(event.target.value);
  };

  render(){
    return(
      <div >
          List Filtering: <input type="text" placeholder="Title Search" />
          Genre: <select ><option>All</option></select><br /> <br />
          Release Date: <select ><option>All</option></select>&emsp;
          Rating: <select ><option>All</option></select>&emsp;
          Sort By: <select ><option>Popularity</option></select>&emsp;
          <select onChange={this.dropdownChangeHandler}>
              <option value="Select Language..">Select Language..</option>
              <option value="English">English</option>
              <option value="Turkish">Turkish</option>
              <option value="Arabic">Arabic</option>
              <option value="Korean">Korean</option>
          </select>

      </div>
  );

  }
}



export default FilterArea;
