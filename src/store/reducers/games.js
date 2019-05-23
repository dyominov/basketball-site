import { GET_RESULT } from '../actions/actionTypes';

const initialState = {
  percentHome: 0,
  averageHome: 0,
  percentAway: 0,
  averageAway: 0,
  minTotal: 0,
  averageTotal: 0,
  maxTotal: 0,
  handicape: 0
};

export const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RESULT: {
      return {
        percentHome: payload.percentHome,
        averageHome: payload.averageHome,
        percentAway: payload.percentAway,
        averageAway: payload.averageAway,
        minTotal: payload.minTotal,
        averageTotal: payload.averageTotal,
        maxTotal: payload.maxTotal,
        handicape: payload.handicape
      };
    }
    default:
      return state;
  }
};
