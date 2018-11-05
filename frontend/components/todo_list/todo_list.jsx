import React from 'react';
import TodoForm from './todo_form';
import TodoListItem from './todo_list_item';

const TodoList = ({todos, receiveTodo, removeTodo}) => {
  const items = todos.map((todo) => {
    return (<TodoListItem key={todo.id} receiveTodo={receiveTodo} removeTodo={removeTodo} todo={todo} />);
  });
  return (
    <>
      <ul>
        {items}
      </ul>
      <TodoForm receiveTodo={receiveTodo}/>
    </>
  );
};

export default TodoList;
