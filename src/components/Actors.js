import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorDivs = actors.map(actor => (
    <div>
      <h2>Name: {actor.name}</h2>
      <ul>Movies:
        {actor.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  ))
  return (
    <div>
      <h1>Actors Page</h1>
      {actorDivs}
    </div>
  );
};

export default Actors;
