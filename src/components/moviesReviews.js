import { Component } from 'react';
import axios from 'axios';

import './movieReviews.css';

class MoviesReviews extends Component { 

  _isMounted = false;
    constructor(props) {
        super(props);
     
        this.state = {
          movies: [],
        };
      }
      
      componentDidMount(){
        this._isMounted = true;
        const moviesId = this.props.match.params.movieId;
        console.log("moviesId " + moviesId);
        axios.get(`
        https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=ed4f70d18fa8cbc03fb59ce04847e1bc`)
        .then(res =>{
            console.log(res);
        const movies =res.data.results;
        if (this._isMounted) {
            this.setState({ movies });
        }
        }).catch(function (error) {
          // handle error
          console.log(error);
        })
        }
        componentWillUnmount() {
            this._isMounted = false;
          }


  render(){
    console.log(this.state.movies);
    return(
      this.state.movies.map((movie) => {
        return(
          <div className='container'>
            <h4>{movie.author}:</h4><p>{movie.content}</p>
          </div>
        )
      })
    );
  
    }
  }


export default MoviesReviews;
/*
return(
    
  {this.state.movies.map((movie) => {
    return(
    <div className="mov">
      <h3>{this.state.movies.title}</h3>
      <div className='container'>
      <img src={`https://image.tmdb.org/t/p/w500${this.state.movies.poster_path}`} alt={movie.title} className='mov_img'/><br /><br /><br />
      </div>
      <div className='container'>
          <div className='mov_body'>
              <p><b>{movie.reviews[0].name} :</b> {movie.reviews[0].review}</p>
      </div>
      </div>
  </div>
    );
  })}
);*/