import React, { useState } from 'react';
import Score from './Score';
import Handicape from './Handicape';
import Over from './Over';

const ManyInputs = props => {
  const [game, setGame] = useState('Boston');
  const [homeTeamName, setHomeTeamName] = useState('Boston');
  const [awayTeamName, setAwayTeamName] = useState('Boston');
  const [totalScore, setTotalScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [handicape, setHandicape] = useState(0);

  const homeTeam = {
    name: homeTeamName
  };
  const awayTeam = {
    name: awayTeamName
  };

  const parseData = () => {
    let tmp = game.split(' ');
    setHomeTeamName(tmp[0].trim());
    setAwayTeamName(tmp[1].trim());
    setHandicape(tmp[2].replace('–', '-').trim());
    setTotalScore(tmp[3].trim());
    setHomeScore(tmp[4].trim());
    setAwayScore(tmp[5].trim());
  };
  return (
    <div>
      <div className="input">
        <h1>Get Result</h1>
        <form>
          <label>
            <input
              type="text"
              name="name"
              value={game}
              onChange={e => setGame(e.target.value)}
              placeholder="email"
            />
          </label>
        </form>

        <button onClick={() => parseData()}>parse data</button>
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

export default ManyInputs;
