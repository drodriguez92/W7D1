import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { updateTodo, deleteTodo, fetchTodos, createTodo } from '../../actions/todo_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
