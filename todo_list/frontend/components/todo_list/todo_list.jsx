import React from 'react';
import TodoForm from './todo_form';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  constructor  (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { updateTodo, deleteTodo, createTodo, errors } = this.props;
    const items = this.props.todos.map((todo) => {
      return (<TodoListItem key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo} todo={todo} />);
    });
    return (
      <>
        <ul>
          {items}
        </ul>
        <TodoForm errors={errors} createTodo={createTodo}/>
      </>
    );
  };

};

export default TodoList;
