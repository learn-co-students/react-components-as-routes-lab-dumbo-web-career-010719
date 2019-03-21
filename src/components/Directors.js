import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorArr = directors.map(director => {
    return (<div>
      <h1>{director.name}</h1>
      <h3>Movies:</h3>
      <ul>
        {director.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>)
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorArr}
    </div>
  );
}

export default Directors
