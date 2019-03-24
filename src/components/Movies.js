import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)
  const movieCards = movies.map(movie=>
    <div>
      <h3>Name: {movie.title}</h3>
      <p>Time: {movie.time}</p>
      <p>Genre</p>
      <ul>
        {movie.genres.map(genre=><li>{genre}</li>)}
      </ul>
    </div>
  )

  return (
    <div>
      <h1>Movies Page</h1>
      {movieCards}
    </div>
  );
};

export default Movies;
