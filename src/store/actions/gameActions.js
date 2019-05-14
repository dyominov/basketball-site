import { CREATE_GAME_SUCCESS, OVER_CURRENT_TOTAL_SUCCESS } from './actionTypes';

import { createGame, overCurrentTotal } from '../../api/game-api';

export const createGameAction = game => async dispatch => {
  await createGame(game).then(body => {
    console.log('action ', body);
    dispatch({
      type: CREATE_GAME_SUCCESS,
      payload: body
    });
  });
};

export const overCurrentTotalAction = game => async dispatch => {
  await overCurrentTotal(game).then(body => {
    console.log('action ', body);
    dispatch({
      type: OVER_CURRENT_TOTAL_SUCCESS,
      payload: body
    });
  });
};
