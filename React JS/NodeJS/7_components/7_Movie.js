import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../7_routes/7_Home.css";
 
function Movie({ id, coverImg, title, year, summary, genres }) {
  if (!summary) {
    return null;
  }
  
  return(
    <div className="movie-app">
      <div className="movie-card">
        <img src={coverImg} alt={title}/>
        <div className="movie-details">
          <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
          <h4>{year}</h4>
          <p>{summary.length > 1500 ? `${summary.slice(0, 1500)}..` : summary}</p>
          <ul className="movie-genres">
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
