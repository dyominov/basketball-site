import React from 'react';

const Score = props => {
  return (
    <div>
      <div>
        <div>{props.name}</div>
        <div>Over {props.percent * 100} %</div>
        <div>Under {(1 - props.percent) * 100} %</div>
        <div>Average point {props.average}</div>
      </div>
    </div>
  );
};

export default Score;
