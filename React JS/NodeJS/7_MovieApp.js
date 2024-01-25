import {useState, useEffect} from "react";
import "./7_MovieApp.css";

function MovieApp() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    // useEffect(() => {
    //     fetch(
    //         `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    //     )
    //     .then((response) => response.json())
    //     .then((json) => {
    //         setMovies(json.data.movies)
    //         setLoading(false)
    //     });
    // }, []);
    // console.log(movies);

    const getMovies = async() => {
        const json = await(
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);

    return (
        <div className="movie-app">
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <div>
              {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                  <img
                    src={movie.medium_cover_image}
                    alt={movie.title}
                    className="movie-image"
                  />
                  <div className="movie-details">
                    <h2 className="movie-title">{movie.title}</h2>
                    <p className="movie-summary">{movie.summary}</p>
                    <ul className="movie-genres">
                      {movie.genres.map((g) => (
                        <li key={g}>{g}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
    );
}

export default MovieApp;
