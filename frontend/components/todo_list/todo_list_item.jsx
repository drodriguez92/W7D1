import React from 'react';
import TodoDetailView from './todo_detail_container';

class TodoListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.todo;
    this.removeTodo = this.removeTodo.bind(this);
    this.changeTodo = this.changeTodo.bind(this);
  }

  changeTodo() {
    console.log(this.state.done);
    this.setState({done: !this.state.done});
    console.log(this.state.done);
    const {id, title, body, done} = this.state;
    const newState = {
      id: id,
      title: title,
      body: body,
      done: !done
    };
    this.props.receiveTodo(newState);
  }

  removeTodo() {
    this.props.removeTodo(this.state.id);
  }

  render() {
    const { title, id, done } = this.state;
    return (
      <>
        <li>{title}</li>
        <button onClick={this.changeTodo}>{done ? "Undo" : "Done"}</button>
        <ul>
          <TodoDetailView todo={this.state} />
        </ul>
      </>
    )
  }
}

export default TodoListItem;
