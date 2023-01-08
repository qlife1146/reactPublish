import "../css/detail.css";

import { useParams, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

// const getMovieList = async () => {
//     const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
//     setMovieList(json.data.movies);
//     setLoading(false);
// };
// useEffect(() => {
//     getMovieList();
// }, []);

function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [movieInfo, setMovieInfo] = useState([]);
    const getMovieInfo = useCallback(async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        const movie = json.data.movie;
        setMovieInfo(movie);
        setLoading(false);
    }, [id]);
    useEffect(() => {
        getMovieInfo();
    }, [getMovieInfo]);

    return loading ? (
        <h1>Loading...</h1>
    ) : (
        <div className="mainLayout">
            <button
                className="backButton"
                onClick={() => navigate(-1)}
            >
                Go back
            </button>
            {/* 당연하듯이 map을 이용하려고 했지만 되지 않고 끙끙대다가
            다시 생각해 보니 리스트가 아닌데 왜 써야 하지 하면서 지우니 잘 됐다... */}
            <div className="imgLayout">
                <img
                    className="mainImage"
                    src={movieInfo.large_cover_image}
                    alt={movieInfo.title + "'s thumbnail."}
                    title={movieInfo.title}
                />
                <div className="infoLayout">
                    <div className="titleLayout">
                        <h1>{movieInfo.title}</h1>
                        <h3>({movieInfo.year})</h3>
                    </div>
                    <div className="genreLayout">
                        {movieInfo.genres.map((genre) => (
                            <h3>{genre}</h3>
                        ))}
                    </div>
                    {/* <h3>{movieInfo.genres}</h3> */}
                    <div className="ratingLayout">
                        <h3>
                            ⭐️ {movieInfo.rating} / 10.0 &nbsp;<p>&lt;{movieInfo.language}&gt;</p>
                        </h3>
                        <a href={"https://www.imdb.com/title/" + movieInfo.imdb_code}>
                            <img
                                className="imdbImage"
                                src="../css/imdb.png"
                                alt="imdb"
                            />
                        </a>
                    </div>
                    {/* <h7>language: {movieInfo.language}</h7> */}
                </div>
            </div>
            <div className="descriptionLayout">
                <p>{movieInfo.description_full}</p>
            </div>
        </div>
    );
}

//layout
//large_cover_image (center)    | title (h1) (year) (h2)
//                              | genres (h3)
//                              | ⭐️ rating(h3) / 10.0 | language(h4)
//                              | imdb_code
// description_full

export default Detail;
