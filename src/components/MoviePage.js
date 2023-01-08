import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function MoviePage({ id, medium_cover_image, title, year, genres, rating, summary }) {
    return (
        <div className="movieKey">
            <img
                src={medium_cover_image}
                alt={title + "'s thumbnail"}
                title={title}
            />
            <div className="movieInfo">
                <div className="movieProperties">
                    <h2>
                        <Link to={`/movie/${id}`}>
                            {title}({year})
                        </Link>
                    </h2>
                    <h4>⭐️ {rating}/10.0</h4>
                    <ul>
                        {genres.map((genre) => (
                            <li key={genre}>{genre}</li>
                        ))}
                    </ul>
                </div>
                <div className="movieSummary">
                    <p>{summary === "" ? "-" : summary}</p>
                </div>
            </div>
        </div>
    );
}

MoviePage.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
};

export default MoviePage;
