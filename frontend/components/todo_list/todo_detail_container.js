import TodoDetailView from './todo_detail_view';
import { removeTodo } from '../../actions/todo_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  removeTodo: (id) => dispatch(removeTodo(id))
});

export default connect(null, mapDispatchToProps)(TodoDetailView);
