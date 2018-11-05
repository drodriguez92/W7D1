import { REMOVE_STEP, RECEIVE_STEP, RECEIVE_STEPS } from '../actions/step_actions';

const stepsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STEP:
      const {id, title, body, done} = action.step;
      const newTodo = {
        [id]: {
          id: id,
          title: title,
          body: body,
          done: done
        }
      };
      return merge({}, state, newTodo);
    case RECEIVE_STEPS:
      const newTodos = {};
      action.steps.forEach((step) => {
        const {id, title, body, done} = step;
        newTodos[id] =  {
          id: id,
          title: title,
          body: body,
          done: done
        };
      });
      return newTodos;
    case REMOVE_STEP:
      const newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default stepsReducer;
