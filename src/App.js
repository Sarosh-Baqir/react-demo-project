import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import MoviesDscription from './components/moviesDescription';
import Movies from './components/movies';
import MoviesReviews from './components/moviesReviews';

class App extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        movies: [],
      };
    }

    componentDidMount(){
      axios.get(`
      https://api.themoviedb.org/3/movie/popular?api_key=ed4f70d18fa8cbc03fb59ce04847e1bc`)
      .then(res =>{
      const movies =res.data.results;
      this.setState({ movies });  // setting state will rerender component
      }).catch(function (error) {
        // handle error
        console.log(error);
      })
      }
      
   
  render(){
    return (
      <div className="App">
        <Switch>
        <Route path='/' exact>
            <Movies movies={this.state.movies}/>
          </Route>
  
           <Route exact path='/movies/:movieId' component={MoviesDscription}/>

           <Route exact path='/movies-reviews/:movieId' component={MoviesReviews}/>
  
  
        </Switch>  
  
      </div>
    );
  }
  
}

export default App;
