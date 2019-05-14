import React, { useState } from 'react';
import './Over.css';

const Over = props => {
  const [homeTeamName, setHomeTeamName] = useState('Boston');
  const [awayTeamName, setAwayTeamName] = useState('Boston');
  const [totalScore, setTotalScore] = useState('');

  const homeTeam = {
    name: homeTeamName
  };
  const awayTeam = {
    name: awayTeamName
  };

  console.log(props.games.score);
  return (
    <div className="over">
      <h1>Get Over</h1>
      <form>
        <label>
          Home Team:
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
        </label>
      </form>
      <form>
        <label>
          Away Team:
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
          Total score:
          <input
            type="text"
            name="name"
            value={totalScore}
            onChange={e => setTotalScore(e.target.value)}
            placeholder="put score"
          />
        </label>
      </form>
      <button
        onClick={() => props.overCurrentTotal({ homeTeam, awayTeam, totalScore: totalScore })}
      >
        check game
      </button>
      <p />
      Over {totalScore}
      <p />
      {props.games.score * 100} %
      <p />
      Under {totalScore}
      <p />
      {(1 - props.games.score) * 100} %
    </div>
  );
};

export default Over;
