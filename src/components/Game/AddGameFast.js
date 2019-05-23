import React, { useState } from 'react';
import './Game.css';

const AddGameFast = props => {
  const [homeTeamName, setHomeTeamName] = useState('Boston');
  const [awayTeamName, setAwayTeamName] = useState('Boston');
  const [fullScore, setFullScore] = useState('');
  const [homeScore, setHomeScore] = useState('');
  const [awayScore, setAwayScore] = useState('');

  function game() {
    const score = fullScore.trim().split(':');
    setHomeScore(score[0]);
    setAwayScore(score[1]);
  }

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
          Game Home Team
          <select value={homeTeamName} onChange={e => setHomeTeamName(e.target.value)}>
            <option value="Boston">Boston</option>
            <option value="Chicago">Chicago</option>
            <option value="Cleveland">Cleveland</option>
            <option value="Dallas">Dallas</option>
            <option value="Detroit">Detroit</option>
            <option value="Houston">Houston</option>
            <option value="Indianapolis">Indianapolis</option>
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
          Away Team
          <select value={awayTeamName} onChange={e => setAwayTeamName(e.target.value)}>
            <option value="Boston">Boston</option>
            <option value="Chicago">Chicago</option>
            <option value="Cleveland">Cleveland</option>
            <option value="Dallas">Dallas</option>
            <option value="Detroit">Detroit</option>
            <option value="Houston">Houston</option>
            <option value="Indianapolis">Indianapolis</option>
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
          Score
          <input
            type="text"
            name="name"
            value={fullScore}
            onChange={e => setFullScore(e.target.value)}
            placeholder="game score"
          />
        </label>
      </form>

      <button onClick={() => game()}>Parse data</button>
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
export default AddGameFast;
