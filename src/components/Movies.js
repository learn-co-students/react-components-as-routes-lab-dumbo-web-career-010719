import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieDivs = movies.map(movie => (
    <div>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>Genres:
        {movie.genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>
  ))
  return (
    <div>
        <h1>Movies Page</h1>
        {movieDivs}
    </div>
  );
};

export default Movies;
