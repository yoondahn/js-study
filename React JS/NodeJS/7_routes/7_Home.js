import {useState, useEffect} from "react";
import Movie from "../7_components/7_Movie";
import "./7_Home.css";

function Home() {
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
                <Movie>
                    key={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                </Movie>
              ))}
            </div>
          )}
        </div>
    );
} 

export default Home;
