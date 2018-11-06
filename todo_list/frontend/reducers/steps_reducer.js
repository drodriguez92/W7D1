import { REMOVE_STEP, RECEIVE_STEP, RECEIVE_STEPS } from '../actions/step_actions';
import { merge } from 'lodash';

export const stepsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REMOVE_STEP:
      const newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;

    case RECEIVE_STEP:
      const id = action.step.id;
      const newState = {
        [id]: action.step
      };
      return merge({}, state, newState);

    case RECEIVE_STEPS:
      return action.steps;

    default:
      return state;
  }
};

export default stepsReducer;
