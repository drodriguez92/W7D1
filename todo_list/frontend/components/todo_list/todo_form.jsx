import React from 'react';
import uniqueId from '../../util/unique_id';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: "", done: false};
    this.update = this.update.bind(this);
    this.makeTodo = this.makeTodo.bind(this);
    this.showErrors = this.showErrors.bind(this);
  }

  makeTodo(e) {
    e.preventDefault();
    this.props.createTodo(this.state).then(() => {
      this.setState({title: "", body: ""});
    });
  }

  update(field) {
    return (e) => {
      if (field === 'done') {
        const done = e.target.value == 'true' ? true : false;
        this.setState({[field]: done});
      } else {
        this.setState({[field]: e.target.value});
      }
    };
  }

  showErrors() {
    const {errors} = this.props;
    return errors.map((error, idx)=>{
      return (
        <li key={idx}>{error}</li>
      );
    });
  }

  render() {
    const {title, body, done} = this.state;

    return (
      <>
        <ul>
          {this.showErrors()}
        </ul>
        <form onSubmit={this.makeTodo}>
          <label htmlFor="title">Title</label>
          <input onChange = {this.update("title")} id="title" type="text" value={title}></input>
          <br />
          <br />
          <label htmlFor="body">Body</label>
          <textarea onChange={this.update("body")} id="body" value={body}></textarea>
          <br />
          <br />
          <label htmlFor="done">Done???</label>
          <br />
          <label htmlFor="yes"> Yes</label>
          <input onChange = {this.update("done")} id="yes" name="done" type="radio" value="true" checked={done}></input>
          <label htmlFor="no"> No</label>
          <input onChange = {this.update("done")} id="no" name="done" type="radio" value="false" checked={!done}></input>
          <br />
          <br />
          <input type="submit" value="Make To-do"></input>
        </form>
      </>
    );
  }
}

export default TodoForm;
