import { useParams } from 'react-router-dom';

import './movieReviews.css';

const MoviesReviews = () => {

        var dummyData = [
          {
            "id": '1',
            "title": "Titanic",
            "image": "http://images.moviepostershop.com/titanic-movie-poster-1997-1020339699.jpg",
            "imdbID": 'tt0076759',
            "rating": 6.8,
            "language": "English",
            "reviews": [{"name":"Hollywood Reporter","review":"Paramount should replace that white mountain in its logo with an iceberg for the next several months. The studio will navigate spectacularly with its latest launch, Titanic, the most expensive movie ever created about what was once the largest moving object ever built."}]
            
          },
          {
            "id": '2',
            "title": "Taken",
            "image": "https://m.media-amazon.com/images/M/MV5BMTYxNzQ2MTUwMF5BMl5BanBnXkFtZTgwNTMwMDIzNDM@._V1_.jpg",
            "imdbID": "&#39;tt0080684&#39",
            "rating": 4.9,
            "language": "English",
            "reviews": [{"name":"English Reporter","review":"Paramount should replace that white mountain in its logo with an iceberg for the next several months. The studio will navigate spectacularly with its latest launch, Titanic, the most expensive movie ever created about what was once the largest moving object ever built."}]
            
          },
          {
            "id": '3',
            "title": "Hot Sweet Sour",
            "image": "https://m.media-amazon.com/images/M/MV5BNGY0OTBjZTgtZjAxMC00ODY3LTg5NTctMGY1MjBlOTI1MDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            "imdbID": "tt0086190&#39",
            "rating": 5.7,
            "language": "Turkish",
            "reviews": [{"name":"Turk Reporter","review":"Paramount should replace that white mountain in its logo with an iceberg for the next several months. The studio will navigate spectacularly with its latest launch, Titanic, the most expensive movie ever created about what was once the largest moving object ever built."}]
            
          },
          {
            "id": '4',
            "title": "The Time That Remains",
            "image": "https://m.media-amazon.com/images/M/MV5BMTUwNDg4MDQzOF5BMl5BanBnXkFtZTcwNDU5MTkyNA@@._V1_.jpg",
            "imdbID": "tt0086190&#39",
            "rating": 5.7,
            "language": "Arabic",
            "reviews": [{"name":"Arab Reporter","review":"Paramount should replace that white mountain in its logo with an iceberg for the next several months. The studio will navigate spectacularly with its latest launch, Titanic, the most expensive movie ever created about what was once the largest moving object ever built."}]
            
          },
          {
            "id": '5',
            "title": "The Villainess",
            "image": "https://i.ytimg.com/vi/m82iyRmr1XE/movieposter.jpg",
            "imdbID": "tt0086190&#39",
            "rating": 5.7,
            "language": "Korean",
            "reviews": [{"name":"Korean Reporter","review":"Paramount should replace that white mountain in its logo with an iceberg for the next several months. The studio will navigate spectacularly with its latest launch, Titanic, the most expensive movie ever created about what was once the largest moving object ever built."}]
            
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
                    <p><b>{movie.reviews[0].name} :</b> {movie.reviews[0].review}</p>
            </div>
            </div>
        </div>
    );
}

export default MoviesReviews;