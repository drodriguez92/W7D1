import * as APIUtil from '../util/todo_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_TODO = 'RECEIVE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo: todo
  };
};

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  };
};

export const removeTodo = (todo_id) => {
  return {
    type: REMOVE_TODO,
    todo_id: todo_id
  };
};

export const fetchTodos = () => dispatch => {
  return APIUtil.fetchTodos().then(todos => {
    return dispatch(receiveTodos(todos));
  });
};

export const createTodo = (todo) => dispatch => {
  return APIUtil.createTodo(todo).then(
    todo => dispatch(receiveTodo(todo)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updateTodo = (todo) => dispatch => {
  return APIUtil.updateTodo(todo).then(
    todo => dispatch(receiveTodo(todo)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const deleteTodo = (todo_id) => dispatch => {
  return APIUtil.deleteTodo(todo_id).then(
    ({id}) => dispatch(removeTodo(id)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};
