import { GET_RESULT } from '../actions/actionTypes';

const initialState = {
  percentHome: 0,
  handicapHalf: 0,
  percentAway: 0,
  averageHalf: 0,
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
        handicapHalf: payload.handicapHalf,
        percentAway: payload.percentAway,
        averageHalf: payload.averageHalf,
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
