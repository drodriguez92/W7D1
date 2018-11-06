import React from 'react';
import TodoDetailView from './todo_detail_container';

class TodoListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.todo;
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  updateTodo() {
    const {id, title, body, done} = this.state;
    const newState = {
      id: id,
      title: title,
      body: body,
      done: !done
    };
    this.props.updateTodo(newState).then(this.setState({done: !done}));
  }

  deleteTodo() {
    this.props.deleteTodo(this.state.id);
  }

  render() {
    const { title, id, done } = this.state;
    return (
      <>
        <li>{title}</li>
        <button onClick={this.updateTodo}>{done ? "Undo" : "Done"}</button>
        <ul>
          <TodoDetailView todo={this.state} />
        </ul>
      </>
    )
  }
}

export default TodoListItem;
