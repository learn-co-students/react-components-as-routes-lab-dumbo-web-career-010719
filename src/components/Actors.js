import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsArr = actors.map(actor => {
    return <div>
              <p>Name: {actor.name}</p>
              <ul>
                {actor.movies.map(movie => <li>{movie}</li>)}
              </ul>
           </div>
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsArr}
    </div>
  );
};

export default Actors;
