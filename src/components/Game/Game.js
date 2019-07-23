import React, { useState } from 'react';
import './Game.css';

const Game = props => {
  const [games, setGames] = useState('');

  console.log(games);

  return (
    <div className="game">
      <h1>Add Games</h1>
      <form>
        <label>
          <textarea
            className="form-control"
            id="ta1"
            cols="70"
            rows="20"
            onChange={event => setGames(event.target.value)}
            value={games}
          />
          <p />
        </label>
      </form>
      <b />
      <button
        onClick={() =>
          props.createGame({
            games
          })
        }
      >
        create game
      </button>
    </div>
  );
};
export default Game;
