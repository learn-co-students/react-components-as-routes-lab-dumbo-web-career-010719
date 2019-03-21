import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorArr = actors.map(actor => {
    return (
      <div>
        <h1>{actor.name}</h1>
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorArr}
    </div>
  );
};

export default Actors;
