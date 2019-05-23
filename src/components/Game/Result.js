import React, { useState } from 'react';
import './Over.css';
import Over from './Over';
import Score from './Score';
import Handicape from './Handicape';

const Result = props => {
  const [homeTeamName, setHomeTeamName] = useState('Boston');
  const [awayTeamName, setAwayTeamName] = useState('Boston');
  const [totalScore, setTotalScore] = useState(0);
  const [homeScore, setHomeScore] = useState('');
  const [awayScore, setAwayScore] = useState('');
  const [handicape, setHandicape] = useState(0);

  const homeTeam = {
    name: homeTeamName
  };
  const awayTeam = {
    name: awayTeamName
  };
  return (
    <div>
      <div className="input">
        <h1>Get Result</h1>
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
            Home score:
            <input
              type="text"
              name="name"
              value={homeScore}
              onChange={e => setHomeScore(e.target.value)}
              placeholder="put score"
            />
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
            Away score:
            <input
              type="text"
              name="name"
              value={awayScore}
              onChange={e => setAwayScore(e.target.value)}
              placeholder="put score"
            />
            <p />
            Handicap:
            <input
              type="text"
              name="name"
              value={handicape}
              onChange={e => setHandicape(e.target.value)}
              placeholder="put score"
            />
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
          onClick={() =>
            props.getResult({ homeTeam, awayTeam, totalScore, homeScore, awayScore, handicape })
          }
        >
          check game
        </button>
        <p />
      </div>
      <div className="score">
        <Score
          name={homeTeamName}
          percent={props.games.percentHome}
          average={props.games.averageHome}
        />
        <Score
          name={awayTeamName}
          percent={props.games.percentAway}
          average={props.games.averageAway}
        />
      </div>
      <div className="score">
        <Handicape handicape={handicape} percent={props.games.handicape} />
      </div>
      <p />
      <div className="over">
        <Over totalScore={Number(totalScore) - 3} score={props.games.minTotal} />
        <Over totalScore={totalScore} score={props.games.averageTotal} />
        <Over totalScore={Number(totalScore) + 3} score={props.games.maxTotal} />
      </div>
    </div>
  );
};

export default Result;
