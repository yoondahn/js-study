import { useState, useEffect } from "react";
import Movie from "../7_components/7_Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
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

    return (
        <div>
          {loading ? (
            <h3>Loading...</h3>
          ) : movies.length === 0 ? (
            <h3>No movies found.</h3>
          ) : (
            <div>
              {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                />
              ))}
            </div>
          )}
        </div>
    );
} 

export default Home;
