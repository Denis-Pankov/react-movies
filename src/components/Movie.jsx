import React from "react";

function Movie(props) {
  const {
    Title: title,
    imdbID: id,
    Year: year,
    Type: type,
    Poster: poster,
  } = props;
  return (
    <div className="movie card" id={id}>
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <img
            className="activator"
            src={`https://via.placeholder.com/300x370?text=${title}`}
            alt={title}
          />
        ) : (
          <img className="activator" src={poster} alt={title} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
          <p className="material-icons right">{year}</p>
        </span>
        <p>{type}</p>
      </div>
    </div>
  );
}

export { Movie };
