import StepList from './step_list';
import { receiveStep } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch) => {
  receiveStep: (step) => dispatch(receiveStep(step))
};

const mapStateToProps = (state) => {
  steps: state.steps,
  todo_id: 
}


export default connect(mapStateToProps, mapDispatchToProps)(StepList)
