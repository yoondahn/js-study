import PropTypes from "prop-types";
 
function Movie({ key, converImg, title, summary, genres }) {
    return(
        <div className="movie-app">
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <div>
                <div key={key} className="movie-card">
                  <img
                    src={converImg}
                    alt={title}
                    className="movie-image"
                  />
                  <div className="movie-details">
                    <h2 className="movie-title">{title}</h2>
                    <p className="movie-summary">{summary}</p>
                    <ul className="movie-genres">
                      {genres.map((g) => (
                        <li key={g}>{g}</li>
                      ))}
                    </ul>
                  </div>
                </div>
            </div>
          )}
        </div>
    );
}

Movie.prototype = {
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
};

export default Movie;
