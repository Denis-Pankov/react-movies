import React from "react";
import { Movie } from "./Movie";

function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? 
      movies.map(
        (
          movie /* Здесь как раз круглые скобки, что мы именно возвращаем */
        ) => (
          <Movie
            key={movie.imdbID}
            {...movie}
          /> /* ...movie - равносильно тому, что мы напишем title = title, poster = poster и т.д. */
        )
      ) : <h4>Nothing found</h4>
    }
    </div>
  );
}

export { Movies };
