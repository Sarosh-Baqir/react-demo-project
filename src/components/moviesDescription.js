import axios from 'axios';
import { Component } from 'react';

import './movieDescription.css';


class MoviesDscription extends Component {
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
        axios.get(`
        https://api.themoviedb.org/3/movie/${moviesId}?api_key=ed4f70d18fa8cbc03fb59ce04847e1bc`)
        .then(res =>{
            console.log(res.data);
        const movies =res.data;
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
        
    return(
        <div className="mov">
            <h3>{this.state.movies.title}</h3>
            <div className='container'>
            <img src={`https://image.tmdb.org/t/p/w500${this.state.movies.poster_path}`} alt={this.state.movies.title} className='mov_img'/><br /><br /><br />
            </div>
            <div className='container'>
                <div className='mov_body'>
            <p><b> Popularity:</b> {this.state.movies.popularity}</p>
            <p> <b>Language:</b> {this.state.movies.original_language}</p>
            <p><b> Description:</b> {this.state.movies.overview}</p>
            </div>
            </div>
        </div>
    );
    }

}

export default MoviesDscription;