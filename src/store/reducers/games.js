import { OVER_CURRENT_TOTAL_SUCCESS } from '../actions/actionTypes';

const initialState = {
  score: 0
};

export const gameReducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case OVER_CURRENT_TOTAL_SUCCESS: {
      return { score: payload };
    }
    default:
      return state;
  }
};
