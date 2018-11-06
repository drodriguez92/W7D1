import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions';
import Root from './components/Root';
import { allTodos } from './reducers/selectors';
import { fetchTodos } from './actions/todo_actions';
const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, rootElement);
});

//TEST
console.log('start');
window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.removeTodo = removeTodo;
window.allTodos = allTodos;
window.fetchTodos = fetchTodos;
