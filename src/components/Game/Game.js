import React, { useState } from 'react';
import './Game.css';

const Game = props => {
  const [homeTeamName, setHomeTeamName] = useState('Boston');
  const [awayTeamName, setAwayTeamName] = useState('Boston');
  const [homeScore, setHomeScore] = useState('');
  const [awayScore, setAwayScore] = useState('');

  const homeTeam = {
    name: homeTeamName,
    score: homeScore
  };
  const awayTeam = {
    name: awayTeamName,
    score: awayScore
  };

  return (
    <div className="game">
      <h1>Add Game</h1>
      <form>
        <label>
          Home Team
          <select value={homeTeamName} onChange={e => setHomeTeamName(e.target.value)}>
            <option value="Boston">Boston</option>
            <option value="Chicago">Chicago</option>
            <option value="Cleveland">Cleveland</option>
            <option value="Dallas">Dallas</option>
            <option value="Detroit">Detroit</option>
            <option value="Houston">Houston</option>
            <option value="Indianapolis">Indianapolis</option>
            <option value="Houston">Houston</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Memphis">Memphis</option>
            <option value="Miami">Miami</option>
            <option value="New York">New York</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Philadelphia">Philadelphia</option>
            <option value="Phoenix">Phoenix</option>
            <option value="Portland">Portland</option>
            <option value="San Antonio">San Antonio</option>
          </select>
          <p />
          Home score
          <input
            type="text"
            name="name"
            value={homeScore}
            onChange={e => setHomeScore(e.target.value)}
            placeholder="home score"
          />
        </label>
      </form>
      <form>
        <label>
          Away Team
          <select value={awayTeamName} onChange={e => setAwayTeamName(e.target.value)}>
            <option value="Boston">Boston</option>
            <option value="Chicago">Chicago</option>
            <option value="Cleveland">Cleveland</option>
            <option value="Dallas">Dallas</option>
            <option value="Detroit">Detroit</option>
            <option value="Houston">Houston</option>
            <option value="Indianapolis">Indianapolis</option>
            <option value="Houston">Houston</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Memphis">Memphis</option>
            <option value="Miami">Miami</option>
            <option value="New York">New York</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Philadelphia">Philadelphia</option>
            <option value="Phoenix">Phoenix</option>
            <option value="Portland">Portland</option>
            <option value="San Antonio">San Antonio</option>
          </select>
          <p />
          Away score
          <input
            type="text"
            name="name"
            value={awayScore}
            onChange={e => setAwayScore(e.target.value)}
            placeholder="away score"
          />
        </label>
      </form>
      <b />
      <button
        onClick={() =>
          props.createGame({
            homeTeam,
            awayTeam,
            totalScore: Number(homeScore) + Number(awayScore)
          })
        }
      >
        create game
      </button>
    </div>
  );
};
export default Game;
