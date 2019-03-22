import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h3>Name: {movie.title}</h3>
          <h4>Time: {movie.time}</h4>
          Genres: <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
