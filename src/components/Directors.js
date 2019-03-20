import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorDivs = directors.map(director => (
    <div>
      <h2>Name: {director.name}</h2>
      <ul>
        Movies:
        {director.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  ))
  return (
    <div>
      <h1>Directors Page</h1>
      {directorDivs}
    </div>
  );
}

export default Directors
