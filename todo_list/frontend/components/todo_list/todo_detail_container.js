import TodoDetailView from './todo_detail_view';
import { deleteTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/step_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  receiveSteps: (steps) => dispatch(receiveSteps(steps))
});


export default connect(null, mapDispatchToProps)(TodoDetailView);
