import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todo_actions';
import { merge } from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODO:
      const {id, title, body, done} = action.todo;
      const newTodo = {
        [id]: {
          id: id,
          title: title,
          body: body,
          done: done
        }
      };
      return merge({}, state, newTodo);
    case RECEIVE_TODOS:
      const newTodos = {};
      action.todos.forEach((todo) => {
        const {id, title, body, done} = todo;
        newTodos[id] =  {
          id: id,
          title: title,
          body: body,
          done: done
        };
      });
      return newTodos;

    case REMOVE_TODO:
      let newState = Object.assign({}, state);
      delete newState[action.todo_id];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
