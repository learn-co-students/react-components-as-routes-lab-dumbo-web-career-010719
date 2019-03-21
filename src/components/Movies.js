import React from 'react';
import { movies } from '../data';

const Movies = () => {
 const moviesArr = movies.map(movie => {
   return <div>
            <p>Title: {movie.title}</p>
            <p>Time: {movie.time}</p>
            <ul>
              {movie.genres.map(genre => {
               return <li>{genre}</li>
              })}
            </ul>
         </div>
  })
  return (
    <div>
       <h1>Movies Page</h1>
        {moviesArr}
        
    </div>
  );
};

export default Movies;
