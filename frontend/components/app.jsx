import React from 'react';
import TodoList from './todo_list/todo_list_container';

const App = ({store}) => {
  return (
    <>
      <h1>Todos App</h1>
      <TodoList />
    </>
  );
};

export default App;
