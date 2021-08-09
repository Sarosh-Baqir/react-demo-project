import { useParams } from "react-router";

import './movieDescription.css';

const MoviesDscription = () => {


    var dummyData = [
        {
          "id": '1',
          "title": "Titanic",
          "image": "http://images.moviepostershop.com/titanic-movie-poster-1997-1020339699.jpg",
          "imdbID": 'tt0076759',
          "rating": 6.8,
          "language": "English",
          "description": "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him."
        },
        {
          "id": '2',
          "title": "Taken",
          "image": "https://m.media-amazon.com/images/M/MV5BMTYxNzQ2MTUwMF5BMl5BanBnXkFtZTgwNTMwMDIzNDM@._V1_.jpg",
          "imdbID": "&#39;tt0080684&#39",
          "rating": 4.9,
          "language": "English",
          "description": "An ex-Secret Service agent's teenage daughter is abducted by human traffickers while on a trip to Paris. With almost no information on her whereabouts, he travels to Paris to find and save her."
        },
        {
          "id": '3',
          "title": "Hot Sweet Sour",
          "image": "https://m.media-amazon.com/images/M/MV5BNGY0OTBjZTgtZjAxMC00ODY3LTg5NTctMGY1MjBlOTI1MDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          "imdbID": "tt0086190&#39",
          "rating": 5.7,
          "language": "Turkish",
          "description": "Murat and Duygu are deeply in love and when they graduate from College Murat takes the leap and asks Duygu for her hand in marriage but he doesn't get the answer he was looking for. They both agree that if they're both single in five years they will tie the knot, but life has other plans for them."
        
        },
        {
          "id": '4',
          "title": "The Time That Remains",
          "image": "https://m.media-amazon.com/images/M/MV5BMTUwNDg4MDQzOF5BMl5BanBnXkFtZTcwNDU5MTkyNA@@._V1_.jpg",
          "imdbID": "tt0086190&#39",
          "rating": 5.7,
          "language": "Arabic",
          "description": "The Time That Remains is a 2009 semi-biographical drama film written and directed by Palestinian director Elia Suleiman. The film stars Ali Suliman, Elia Suleiman, Saleh Bakri and Samar Qudha Tanus. It gives an account of the creation of the Israeli state from 1948 to the present"
        },
        {
          "id": '5',
          "title": "The Villainess",
          "image": "https://i.ytimg.com/vi/m82iyRmr1XE/movieposter.jpg",
          "imdbID": "tt0086190&#39",
          "rating": 5.7,
          "language": "Korean",
          "description": "Honed from childhood to be an elite assassin, Sook-hee embarks on a rampage of violence and revenge to finally earn her freedom and escape her past."
        }
      ];
      

    let params = useParams();

    const movie = dummyData.find(mov => mov.id === params.movieId)


    return(
        <div className="mov">
            <h3>{movie.title}</h3>
            <div className='container'>
            <img src={movie.image} alt={movie.title} className='mov_img'/><br /><br /><br />
            </div>
            <div className='container'>
                <div className='mov_body'>
            <p><b> Rating:</b> {movie.rating}</p>
            <p> <b>Language:</b> {movie.language}</p>
            <p><b> Description:</b> {movie.description}</p>
            </div>
            </div>
        </div>
    );
}

export default MoviesDscription;