import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsArr = directors.map(director => {
    return <div>
              <p>Name: {director.name}</p>
              <ul>
                {director.movies.map(movie => <li>{movie}</li>)}
              </ul>
           </div>
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsArr}
    </div>
  );
}

export default Directors
