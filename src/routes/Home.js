import { useState, useEffect } from "react";
import MoviePage from "../components/MoviePage";
function Home() {
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);
    const getMovieList = async () => {
        const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
        setMovieList(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovieList();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...?</h1>
            ) : (
                <div>
                    {movieList.map((movie) => (
                        <MoviePage
                            key={movie.id}
                            id={movie.id}
                            medium_cover_image={movie.medium_cover_image}
                            title={movie.title}
                            year={movie.year}
                            genres={movie.genres}
                            rating={movie.rating}
                            summary={movie.summary}
                        />
                    ))}
                    {/* <ul>
                    {movieList.map((movie) => (
                        <li key={movie.id}>{movie.title}</li>
                    ))}
                </ul> */}
                </div>
            )}
        </div>
    );
}

export default Home;
