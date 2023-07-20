import { GET_RESULT } from "../actions/actionTypes";

const initialState = {
  percentHome: 0,
  percentAway: 0,
  firstQuart: 0,
  secondQuart: 0,
  threeQuart: 0,
  fourQuart: 0,
  averageTotal: 0,
  handicape: 0
};

export const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RESULT: {
      return {
        percentHome: payload.percentHome,
        percentAway: payload.percentAway,
        firstQuart: payload.firstQuart,
        secondQuart: payload.secondQuart,
        threeQuart: payload.threeQuart,
        fourQuart: payload.fourQuart,
        averageTotal: payload.average,
        handicape: payload.handicap
      };
    }
    default:
      return state;
  }
};
