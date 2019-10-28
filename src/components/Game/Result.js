import React, { useState } from "react";
import "./Over.css";
import Over from "./Over";
import Score from "./Score";
import Handicape from "./Handicape";

const Result = props => {
  const [homeTeamName, setHomeTeamName] = useState("Boston");
  const [awayTeamName, setAwayTeamName] = useState("Boston");
  const [totalScore, setTotalScore] = useState(0);
  const [halfScore, setHalfScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [handicape, setHandicape] = useState(0);
  const [halfHandicape, setHalfHandicape] = useState(0);

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
            <select
              value={homeTeamName}
              onChange={e => setHomeTeamName(e.target.value)}
            >
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
            <select
              value={homeScore}
              onChange={e => setHomeScore(e.target.value)}
            >
              <option value="104.5">104.5</option>
              <option value="103.5">103.5</option>
              <option value="102.5">102.5</option>
              <option value="101.5">101.5</option>
              <option value="100.5">100.5</option>
              <option value="99.5">99.5</option>
              <option value="98.5">98.5</option>
              <option value="97.5">97.5</option>
              <option value="96.5">96.5</option>
              <option value="95.5">95.5</option>
              <option value="94.5">94.5</option>
              <option value="93.5">93.5</option>
              <option value="92.5">92.5</option>
              <option value="91.5">91.5</option>
              <option value="90.5">90.5</option>
              <option value="89.5">89.5</option>
              <option value="88.5">88.5</option>
              <option value="87.5">87.5</option>
              <option value="86.5">86.5</option>
              <option value="85.5">85.5</option>
              <option value="84.5">84.5</option>
              <option value="83.5">83.5</option>
              <option value="82.5">82.5</option>
              <option value="81.5">81.5</option>
              <option value="80.5">80.5</option>
              <option value="79.5">79.5</option>
            </select>
          </label>
        </form>
        <form>
          <label>
            Away Team:
            <select
              value={awayTeamName}
              onChange={e => setAwayTeamName(e.target.value)}
            >
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
            <select
              value={awayScore}
              onChange={e => setAwayScore(e.target.value)}
            >
              <option value="104.5">104.5</option>
              <option value="103.5">103.5</option>
              <option value="102.5">102.5</option>
              <option value="101.5">101.5</option>
              <option value="100.5">100.5</option>
              <option value="99.5">99.5</option>
              <option value="98.5">98.5</option>
              <option value="97.5">97.5</option>
              <option value="96.5">96.5</option>
              <option value="95.5">95.5</option>
              <option value="94.5">94.5</option>
              <option value="93.5">93.5</option>
              <option value="92.5">92.5</option>
              <option value="91.5">91.5</option>
              <option value="90.5">90.5</option>
              <option value="89.5">89.5</option>
              <option value="88.5">88.5</option>
              <option value="87.5">87.5</option>
              <option value="86.5">86.5</option>
              <option value="85.5">85.5</option>
              <option value="84.5">84.5</option>
              <option value="83.5">83.5</option>
              <option value="82.5">82.5</option>
              <option value="81.5">81.5</option>
              <option value="80.5">80.5</option>
              <option value="79.5">79.5</option>
            </select>
            <p />
            Handicap:
            <select
              value={handicape}
              onChange={e => setHandicape(e.target.value)}
            >
              <option value="-16.5">-16.5</option>
              <option value="-15.5">-15.5</option>
              <option value="-14.5">-14.5</option>
              <option value="-13.5">-13.5</option>
              <option value="-12.5">-12.5</option>
              <option value="-11.5">-11.5</option>
              <option value="-10.5">-10.5</option>
              <option value="-9.5">-9.5</option>
              <option value="-8.5">-8.5</option>
              <option value="-7.5">-7.5</option>
              <option value="-6.5">-6.5</option>
              <option value="-5.5">-5.5</option>
              <option value="-4.5">-4.5</option>
              <option value="-3.5">-3.5</option>
              <option value="-2.5">-2.5</option>
              <option value="-1.5">-1.5</option>
              <option value="-0.5">-0.5</option>
              <option value="+0.5">+0.5</option>
              <option value="+1.5">+1.5</option>
              <option value="+2.5">+2.5</option>
              <option value="+3.5">+3.5</option>
              <option value="+4.5">+4.5</option>
              <option value="+5.5">+5.5</option>
              <option value="+6.5">+6.5</option>
              <option value="+7.5">+7.5</option>
              <option value="+8.5">+8.5</option>
              <option value="+9.5">+9.5</option>
              <option value="+10.5">+10.5</option>
              <option value="+11.5">+11.5</option>
              <option value="+12.5">+12.5</option>
              <option value="+13.5">+13.5</option>
              <option value="+14.5">+14.5</option>
              <option value="+15.5">+15.5</option>
              <option value="+16.5">+16.5</option>
            </select>
            <p />
            Total score:
            <select
              value={totalScore}
              onChange={e => setTotalScore(e.target.value)}
            >
              <option value="191.5">191.5</option>
              <option value="190.5">190.5</option>
              <option value="189.5">189.5</option>
              <option value="188.5">188.5</option>
              <option value="187.5">187.5</option>
              <option value="186.5">186.5</option>
              <option value="185.5">185.5</option>
              <option value="184.5">184.5</option>
              <option value="183.5">183.5</option>
              <option value="182.5">182.5</option>
              <option value="181.5">181.5</option>
              <option value="180.5">180.5</option>
              <option value="179.5">179.5</option>
            </select>
          </label>
        </form>

        <form>
          Half score:
          <select
            value={halfScore}
            onChange={e => setHalfScore(e.target.value)}
          >
            <option value="98.5">98.5</option>
            <option value="97.5">97.5</option>
            <option value="96.5">96.5</option>
            <option value="95.5">95.5</option>
            <option value="94.5">94.5</option>
            <option value="93.5">93.5</option>
            <option value="92.5">92.5</option>
            <option value="91.5">91.5</option>
            <option value="90.5">90.5</option>
            <option value="89.5">89.5</option>
            <option value="88.5">88.5</option>
            <option value="87.5">87.5</option>
          </select>
          Half Handicap:
          <select
            value={halfHandicape}
            onChange={e => setHalfHandicape(e.target.value)}
          >
            <option value="-16.5">-16.5</option>
            <option value="-15.5">-15.5</option>
            <option value="-14.5">-14.5</option>
            <option value="-13.5">-13.5</option>
            <option value="-12.5">-12.5</option>
            <option value="-11.5">-11.5</option>
            <option value="-10.5">-10.5</option>
            <option value="-9.5">-9.5</option>
            <option value="-8.5">-8.5</option>
            <option value="-7.5">-7.5</option>
            <option value="-6.5">-6.5</option>
            <option value="-5.5">-5.5</option>
            <option value="-4.5">-4.5</option>
            <option value="-3.5">-3.5</option>
            <option value="-2.5">-2.5</option>
            <option value="-1.5">-1.5</option>
            <option value="-0.5">-0.5</option>
            <option value="+0.5">+0.5</option>
            <option value="+1.5">+1.5</option>
            <option value="+2.5">+2.5</option>
            <option value="+3.5">+3.5</option>
            <option value="+4.5">+4.5</option>
            <option value="+5.5">+5.5</option>
            <option value="+6.5">+6.5</option>
            <option value="+7.5">+7.5</option>
            <option value="+8.5">+8.5</option>
            <option value="+9.5">+9.5</option>
            <option value="+10.5">+10.5</option>
            <option value="+11.5">+11.5</option>
            <option value="+12.5">+12.5</option>
            <option value="+13.5">+13.5</option>
            <option value="+14.5">+14.5</option>
            <option value="+15.5">+15.5</option>
            <option value="+16.5">+16.5</option>
          </select>
        </form>

        <button
          onClick={() =>
            props.getResult({
              homeTeam,
              awayTeam,
              totalScore,
              homeScore,
              awayScore,
              handicape,
              halfScore,
              halfHandicape
            })
          }
        >
          check game
        </button>
        <p />
      </div>
      <div className="score">
        <Score name={homeTeamName} percent={props.games.percentHome} />
        <Score name={awayTeamName} percent={props.games.percentAway} />
      </div>
      <div className="score">
        <Handicape handicape={handicape} percent={props.games.handicape} />
      </div>

      <div className="score">
        <p />
        <p />
        Half Score
        <Handicape
          handicape={halfHandicape}
          percent={props.games.handicapHalf}
        />
      </div>
      <div className="over">
        <Over totalScore={halfScore} score={props.games.averageHalf} />
      </div>
      <p />
      <p />
      <div className="over">
        <Over
          totalScore={Number(totalScore) - 3}
          score={props.games.minTotal}
        />
        <Over totalScore={totalScore} score={props.games.averageTotal} />
        <Over
          totalScore={Number(totalScore) + 3}
          score={props.games.maxTotal}
        />
      </div>
      {
        //setInterval(props.getResult({ homeTeam, awayTeam, totalScore, homeScore, awayScore, handicape }, 3000))
      }
    </div>
  );
};

export default Result;
