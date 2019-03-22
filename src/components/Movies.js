import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie =>
          <div>
            <h1>{movie.title}</h1>
            <h5>{movie.time} mins</h5>
            <ul>Genres: {movie.genres.map(genre => <li>{genre}</li> )}</ul>
            <h5>Metascore: {movie.metascore}</h5>
          </div>
        )}
    </div>
  );
};

export default Movies;
